from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.schemas.inquiry import InquiryCreate, InquiryResponse
from app.services.inquiry_service import create_inquiry, get_all_inquiries

router = APIRouter()

# Simple in-memory rate limiting (per IP)
request_counts: dict = {}


def check_rate_limit(request: Request):
    ip = request.client.host
    count = request_counts.get(ip, 0)
    if count >= 5:
        raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")
    request_counts[ip] = count + 1


@router.post("/", response_model=InquiryResponse, status_code=201)
def submit_inquiry(
    inquiry: InquiryCreate,
    request: Request,
    db: Session = Depends(get_db)
):
    check_rate_limit(request)
    return create_inquiry(db, inquiry)


@router.get("/", response_model=List[InquiryResponse])
def list_inquiries(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return get_all_inquiries(db, skip, limit)
