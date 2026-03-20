from pydantic import BaseModel, EmailStr, field_validator
from typing import Optional
from datetime import datetime
import re


class InquiryCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    college_name: str
    department: str
    service_type: str
    topic: str
    message: str

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, v: str) -> str:
        cleaned = re.sub(r"\D", "", v)
        if len(cleaned) < 10:
            raise ValueError("Phone number must have at least 10 digits")
        return v

    @field_validator("name", "college_name", "department", "topic", "message")
    @classmethod
    def not_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("This field cannot be empty")
        return v.strip()

    @field_validator("service_type")
    @classmethod
    def valid_service_type(cls, v: str) -> str:
        valid = ["Final Year Project", "Journal Publishing", "Conference Paper", "Hardware Project"]
        if v not in valid:
            raise ValueError(f"service_type must be one of: {', '.join(valid)}")
        return v


class InquiryResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    college_name: str
    department: str
    service_type: str
    topic: str
    message: str
    status: str
    created_at: datetime

    model_config = {"from_attributes": True}
