from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.publishing import PublishingService
from app.schemas.publishing import PublishingServiceResponse

router = APIRouter()


@router.get("/", response_model=List[PublishingServiceResponse])
def get_publishing_services(db: Session = Depends(get_db)):
    return db.query(PublishingService).filter(PublishingService.is_active == True).all()
