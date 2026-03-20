from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.models.project import Project
from app.schemas.project import ProjectResponse

router = APIRouter()


@router.get("/featured", response_model=List[ProjectResponse])
def get_featured_projects(db: Session = Depends(get_db)):
    return db.query(Project).filter(Project.is_featured == True).limit(6).all()


@router.get("/", response_model=List[ProjectResponse])
def get_all_projects(
    category: str = None,
    skip: int = 0,
    limit: int = 20,
    db: Session = Depends(get_db)
):
    query = db.query(Project)
    if category and category != "All":
        query = query.filter(Project.category == category)
    return query.offset(skip).limit(limit).all()
