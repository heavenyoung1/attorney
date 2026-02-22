import logging

from aiogram import Bot, Dispatcher
from aiogram.filters import Command
from aiogram.types import Message, InlineKeyboardMarkup, InlineKeyboardButton

from .config import settings

logger = logging.getLogger(__name__)

bot = Bot(token=settings.BOT_TOKEN)
dp = Dispatcher()


@dp.message(Command("start"))
async def start_handler(message: Message) -> None:
    await message.answer(
        "👋 Добро пожаловать!\n\n"
        "Этот бот уведомляет о новых заявках с сайта адвоката.\n\n"
        "Вы будете получать уведомление каждый раз, когда кто-то "
        "оставит заявку на консультацию.",
    )


async def notify_admin(
    name: str,
    phone: str,
    email: str | None,
    message: str | None,
) -> None:
    text = (
        "📬 *Новая заявка с сайта\\!*\n\n"
        f"👤 *Имя:* {_escape(name)}\n"
        f"📞 *Телефон:* {_escape(phone)}\n"
        f"📧 *Email:* {_escape(email or 'не указан')}\n"
        f"💬 *Сообщение:* {_escape(message or 'не указано')}"
    )

    keyboard = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="🌐 Перейти на сайт",
                    url=settings.SITE_URL,
                )
            ]
        ]
    )

    try:
        await bot.send_message(
            chat_id=settings.ADMIN_CHAT_ID,
            text=text,
            parse_mode="MarkdownV2",
            reply_markup=keyboard,
        )
    except Exception as exc:
        logger.error("Failed to send Telegram notification: %s", exc)


def _escape(text: str) -> str:
    """Escape special characters for MarkdownV2."""
    special = r"\_*[]()~`>#+-=|{}.!"
    return "".join(f"\\{ch}" if ch in special else ch for ch in text)
