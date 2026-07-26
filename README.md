# Attorney App

Это веб-приложение с React-фронтендом, FastAPI-бэкендом, Telegram-ботом и прокси через Caddy. Проект разворачивается через Docker Compose.

## Требования

- Ubuntu 22.04 / Debian 12 или новее
- Docker 24+ и Docker Compose Plugin
- Доменное имя, указывающее на IP сервера
- Открытые порты 80 и 443

## 1. Установка Docker

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo systemctl enable --now docker

docker --version
docker compose version
```

Если нужно запускать Docker без sudo:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

## 2. Получение проекта

```bash
git clone <url-репозитория> attorney
cd attorney
```

## 3. Настройка переменных окружения

Скопируйте пример файла окружения для бэкенда:

```bash
cp backend/.env.example backend/.env
nano backend/.env
```

Заполните значения:

```env
BOT_TOKEN=токен_от_BotFather
ADMIN_CHAT_IDS=123456789
SITE_URL=https://your-domain.ru
```

Важно:
- `BOT_TOKEN` получите у @BotFather в Telegram.
- `ADMIN_CHAT_IDS` укажите ID админов через запятую, например `123456789,987654321`.
- `SITE_URL` должен быть публичным URL сайта с `https://`.

> Для продакшена Docker Compose сам подставит `DATABASE_URL` в контейнере, поэтому отдельный файл для базы задавать не нужно.

## 4. Настройка домена

Если домен отличается от примера, обновите его в двух местах:

- в файле `Caddyfile`
- в `docker-compose.yml` в параметрах сборки фронтенда:

```yaml
frontend:
  build:
    args:
      VITE_SITE_URL: "https://your-domain.ru"
```

Также убедитесь, что DNS уже разошёлся по домену перед запуском.

## 5. Запуск приложения

```bash
docker compose up -d --build
```

При первом запуске Docker соберёт контейнеры, а Caddy автоматически попытается получить SSL-сертификат через Let's Encrypt.

## 6. Проверка работы

```bash
docker compose ps
docker compose logs backend
docker compose logs caddy
```

Проверьте сайт в браузере по HTTPS. Для проверки API можно выполнить:

```bash
curl https://your-domain.ru/api/health
```

Ожидаемый ответ:

```json
{"status":"ok"}
```

## 7. Обновление

```bash
git pull
docker compose up -d --build
```

Данные базы сохраняются в Docker volume и не удаляются при обычной пересборке.

## Полезные команды

```bash
# Остановить все контейнеры
docker compose down

# Остановить и удалить базу данных (необратимо)
docker compose down -v

# Перезапустить сервис
docker compose restart backend

# Посмотреть логи в реальном времени
docker compose logs -f
```

## Резервная копия базы

```bash
docker run --rm \
  -v attorney_db_data:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/attorney-db-backup.tar.gz -C /data .
```
