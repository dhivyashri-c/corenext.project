from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.core.security import verify_password, create_access_token, verify_token
from app.models.admin import AdminUser
from app.models.inquiry import Inquiry
from app.schemas.auth import AdminLogin, Token
from app.schemas.inquiry import InquiryResponse

router = APIRouter()
security = HTTPBearer()


def get_current_admin(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):
    payload = verify_token(credentials.credentials)
    if not payload:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    username = payload.get("sub")
    admin = db.query(AdminUser).filter(AdminUser.username == username).first()
    if not admin or not admin.is_active:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Admin not found")
    return admin


@router.post("/login", response_model=Token)
def admin_login(credentials: AdminLogin, db: Session = Depends(get_db)):
    admin = db.query(AdminUser).filter(AdminUser.username == credentials.username).first()
    if not admin or not verify_password(credentials.password, admin.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password"
        )
    token = create_access_token(data={"sub": admin.username})
    return {"access_token": token, "token_type": "bearer"}


@router.get("/inquiries", response_model=List[InquiryResponse])
def get_all_inquiries(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    _: AdminUser = Depends(get_current_admin)
):
    return db.query(Inquiry).order_by(Inquiry.created_at.desc()).offset(skip).limit(limit).all()
