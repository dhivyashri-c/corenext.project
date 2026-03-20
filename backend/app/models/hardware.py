from sqlalchemy import Column, Integer, String, Boolean, DateTime, JSON, Text
from sqlalchemy.sql import func
from app.core.database import Base


class HardwareProject(Base):
    __tablename__ = "hardware_projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    category = Column(String(100), nullable=False)
    components = Column(JSON, nullable=False, default=list)
    short_description = Column(Text, nullable=False)
    is_featured = Column(Boolean, default=False)
    image_url = Column(String(500), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
