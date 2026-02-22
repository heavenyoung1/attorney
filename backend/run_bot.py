"""
Отдельный процесс для запуска Telegram-бота (polling).
Запускать из директории backend/:
    python run_bot.py
"""
import asyncio
import logging

from app.bot import bot, dp

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s — %(name)s — %(levelname)s — %(message)s",
)


async def main() -> None:
    logging.info("Starting bot polling...")
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
