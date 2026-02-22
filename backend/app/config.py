from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    BOT_TOKEN: str
    ADMIN_CHAT_ID: int
    DATABASE_URL: str = "sqlite+aiosqlite:///./attorney.db"
    SITE_URL: str = "http://localhost:5173"


settings = Settings()
