from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class PublishingServiceBase(BaseModel):
    service_name: str
    description: str
    icon: Optional[str] = None
    is_active: bool = True


class PublishingServiceCreate(PublishingServiceBase):
    pass


class PublishingServiceResponse(PublishingServiceBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}
