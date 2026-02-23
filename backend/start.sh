#!/bin/sh
set -e

# Start Telegram bot polling in background
python run_bot.py &

# Start FastAPI server (foreground — keeps container alive)
exec uvicorn app.main:app --host 0.0.0.0 --port 8000
