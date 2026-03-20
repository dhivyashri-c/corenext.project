from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float, Text
from sqlalchemy.sql import func
from app.core.database import Base


class Testimonial(Base):
    __tablename__ = "testimonials"

    id = Column(Integer, primary_key=True, index=True)
    student_name = Column(String(255), nullable=False)
    college_name = Column(String(255), nullable=False)
    review = Column(Text, nullable=False)
    rating = Column(Float, nullable=False, default=5.0)
    avatar_url = Column(String(500), nullable=True)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
