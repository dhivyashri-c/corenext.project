from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class ProjectBase(BaseModel):
    title: str
    category: str
    tech_stack: List[str]
    short_description: str
    is_featured: bool = False
    image_url: Optional[str] = None


class ProjectCreate(ProjectBase):
    pass


class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}
