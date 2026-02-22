from pydantic import BaseModel, field_validator
from typing import Optional
from datetime import datetime
import re


class ConsultationCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    message: Optional[str] = None

    @field_validator("name")
    @classmethod
    def name_must_not_be_empty(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Имя не может быть пустым")
        return v

    @field_validator("phone")
    @classmethod
    def phone_must_be_valid(cls, v: str) -> str:
        v = v.strip()
        if not v:
            raise ValueError("Телефон не может быть пустым")
        if not re.match(r"^\+?[\d\s\-()]{7,20}$", v):
            raise ValueError("Некорректный номер телефона")
        return v

    @field_validator("email")
    @classmethod
    def email_must_be_valid(cls, v: Optional[str]) -> Optional[str]:
        if v is None or v.strip() == "":
            return None
        v = v.strip()
        if not re.match(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", v):
            raise ValueError("Некорректный email")
        return v


class ConsultationResponse(BaseModel):
    model_config = {"from_attributes": True}

    id: int
    name: str
    phone: str
    email: Optional[str] = None
    message: Optional[str] = None
    created_at: datetime
