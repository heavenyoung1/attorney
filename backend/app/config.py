from pydantic import field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    BOT_TOKEN: str
    ADMIN_CHAT_IDS: list[int]
    DATABASE_URL: str = "sqlite+aiosqlite:///./attorney.db"
    SITE_URL: str = "http://localhost:5173"

    @field_validator("ADMIN_CHAT_IDS", mode="before")
    @classmethod
    def parse_admin_ids(cls, v: object) -> list[int]:
        if isinstance(v, str):
            return [int(x.strip()) for x in v.split(",") if x.strip()]
        if isinstance(v, int):
            return [v]
        return v


settings = Settings()
