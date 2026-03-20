from sqlalchemy.orm import Session
from app.models.inquiry import Inquiry
from app.schemas.inquiry import InquiryCreate
from app.services.email_service import send_inquiry_notification
import logging

logger = logging.getLogger(__name__)


def create_inquiry(db: Session, inquiry_data: InquiryCreate) -> Inquiry:
    db_inquiry = Inquiry(**inquiry_data.model_dump())
    db.add(db_inquiry)
    db.commit()
    db.refresh(db_inquiry)

    # Send email notification (non-blocking)
    try:
        send_inquiry_notification(inquiry_data.model_dump())
    except Exception as e:
        logger.error(f"Email notification failed: {e}")

    return db_inquiry


def get_all_inquiries(db: Session, skip: int = 0, limit: int = 100):
    return db.query(Inquiry).order_by(Inquiry.created_at.desc()).offset(skip).limit(limit).all()


def get_inquiry_by_id(db: Session, inquiry_id: int):
    return db.query(Inquiry).filter(Inquiry.id == inquiry_id).first()
