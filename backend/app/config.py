import json
from pathlib import Path

from pydantic import AliasChoices, Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=(
            Path(__file__).resolve().parents[1] / ".env",
            Path(__file__).resolve().parents[2] / ".env",
        ),
        extra="ignore",
    )

    BOT_TOKEN: str
    ADMIN_CHAT_IDS: list[int] = Field(
        default_factory=list,
        validation_alias=AliasChoices("ADMIN_CHAT_IDS", "ADMIN_CHAT_ID"),
    )
    DATABASE_URL: str = "sqlite+aiosqlite:///./attorney.db"
    SITE_URL: str = "http://localhost:5173"

    @field_validator("ADMIN_CHAT_IDS", mode="before")
    @classmethod
    def parse_admin_ids(cls, v: object) -> list[int]:
        if v is None or v == "":
            return []
        if isinstance(v, str):
            try:
                parsed = json.loads(v)
            except ValueError:
                parsed = [x.strip() for x in v.split(",") if x.strip()]
            if isinstance(parsed, list):
                return [int(x) for x in parsed]
            if isinstance(parsed, int):
                return [parsed]
            return [int(parsed)]
        if isinstance(v, int):
            return [v]
        return v


settings = Settings()
