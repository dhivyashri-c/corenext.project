from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.hardware import HardwareProject
from app.schemas.hardware import HardwareProjectResponse

router = APIRouter()


@router.get("/featured", response_model=List[HardwareProjectResponse])
def get_featured_hardware(db: Session = Depends(get_db)):
    return db.query(HardwareProject).filter(HardwareProject.is_featured == True).limit(6).all()


@router.get("/", response_model=List[HardwareProjectResponse])
def get_all_hardware(
    category: str = None,
    skip: int = 0,
    limit: int = 20,
    db: Session = Depends(get_db)
):
    query = db.query(HardwareProject)
    if category:
        query = query.filter(HardwareProject.category == category)
    return query.offset(skip).limit(limit).all()
