import logging
from contextlib import asynccontextmanager
from typing import AsyncGenerator

from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession

from .config import settings
from .database import get_db, init_db
from .models import Consultation
from .schemas import ConsultationCreate, ConsultationResponse
from .bot import notify_admin

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    logger.info("Starting up — initialising database...")
    await init_db()
    yield
    logger.info("Shutting down.")


app = FastAPI(
    title="Attorney Website API",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:4173",
        settings.SITE_URL,
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post(
    "/api/send-consultation",
    response_model=ConsultationResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Принять заявку на консультацию",
)
async def send_consultation(
    data: ConsultationCreate,
    db: AsyncSession = Depends(get_db),
) -> Consultation:
    consultation = Consultation(
        name=data.name,
        phone=data.phone,
        email=data.email,
        message=data.message,
    )
    db.add(consultation)

    try:
        await db.commit()
        await db.refresh(consultation)
    except Exception as exc:
        await db.rollback()
        logger.error("Database error: %s", exc)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Ошибка при сохранении заявки. Пожалуйста, попробуйте позже.",
        )

    await notify_admin(
        name=data.name,
        phone=data.phone,
        email=data.email,
        message=data.message,
    )

    return consultation


@app.get("/health", summary="Health check")
async def health_check() -> dict:
    return {"status": "ok"}
