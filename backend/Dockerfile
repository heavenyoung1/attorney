FROM python:3.13-slim

WORKDIR /app

# Install Python dependencies
COPY pyproject.toml .
RUN pip install --no-cache-dir .

# Copy application code
COPY app/ ./app/
COPY run_bot.py .

# Directory for the SQLite database (mounted as a volume)
RUN mkdir -p /app/data

EXPOSE 8000

COPY start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
