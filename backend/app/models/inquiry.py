from sqlalchemy import Column, Integer, String, DateTime, Text, Enum
from sqlalchemy.sql import func
from app.core.database import Base
import enum


class ServiceType(str, enum.Enum):
    FINAL_YEAR_PROJECT = "Final Year Project"
    JOURNAL_PUBLISHING = "Journal Publishing"
    CONFERENCE_PAPER = "Conference Paper"
    HARDWARE_PROJECT = "Hardware Project"


class InquiryStatus(str, enum.Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"


class Inquiry(Base):
    __tablename__ = "inquiries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(20), nullable=False)
    college_name = Column(String(255), nullable=False)
    department = Column(String(255), nullable=False)
    service_type = Column(String(100), nullable=False)
    topic = Column(String(500), nullable=False)
    message = Column(Text, nullable=False)
    status = Column(String(50), default="pending")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
