from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime


class HardwareProjectBase(BaseModel):
    title: str
    category: str
    components: List[str]
    short_description: str
    is_featured: bool = False
    image_url: Optional[str] = None


class HardwareProjectCreate(HardwareProjectBase):
    pass


class HardwareProjectResponse(HardwareProjectBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}
