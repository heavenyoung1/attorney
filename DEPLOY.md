# Инструкция по развёртыванию на сервере

## Требования к серверу

- Linux (Ubuntu 22.04 / Debian 12 или новее)
- 1 GB RAM минимум
- Доменное имя, направленное на IP сервера (A-запись)
- Открытые порты: **80** и **443**

---

## 1. Установка Docker

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo systemctl enable --now docker

# Проверка
docker --version
docker compose version
```

> Чтобы запускать Docker без `sudo`:
> ```bash
> sudo usermod -aG docker $USER
> newgrp docker
> ```

---

## 2. Загрузка проекта на сервер

**Вариант А — через Git:**
```bash
git clone <URL репозитория> attorney
cd attorney
```

**Вариант Б — через scp с локальной машины:**
```bash
# Выполнить на локальной машине
scp -r /путь/к/attorney user@IP_СЕРВЕРА:~/attorney
```

---

## 3. Настройка переменных окружения

Создать файл `backend/.env` на основе примера:

```bash
cp backend/.env.example backend/.env
nano backend/.env
```

Заполнить значения:

```env
BOT_TOKEN=токен_от_BotFather
ADMIN_CHAT_IDS=123456789
SITE_URL=https://xn--32-6kcajl7b5a2b.xn--p1ai
```

| Переменная      | Где взять                                                 |
|-----------------|-----------------------------------------------------------|
| `BOT_TOKEN`     | Написать `/newbot` боту [@BotFather](https://t.me/BotFather) |
| `ADMIN_CHAT_IDS`| Написать боту [@userinfobot](https://t.me/userinfobot)   |
| `SITE_URL`      | Ваш домен с `https://`                                    |

> `DATABASE_URL` не нужно указывать — `docker-compose.yml` задаёт его автоматически.

---

## 4. Проверка домена

Убедиться, что DNS уже распространился — Caddy не сможет выпустить сертификат без этого:

```bash
ping xn--32-6kcajl7b5a2b.xn--p1ai
# IP в ответе должен совпадать с IP сервера
```

---

## 5. Если домен другой

Если домен отличается от `xn--32-6kcajl7b5a2b.xn--p1ai`, поменять его в двух местах:

**`Caddyfile`:**
```
ваш-домен.ru {
    reverse_proxy frontend:80
}
```

**`docker-compose.yml`** → секция `frontend → build → args`:
```yaml
VITE_SITE_URL: "https://ваш-домен.ru"
```

---

## 6. Запуск

```bash
docker compose up -d --build
```

При первом запуске:
- Собираются образы (3–5 минут)
- Caddy автоматически получает SSL-сертификат от Let's Encrypt
- База данных создаётся автоматически

---

## 7. Проверка работоспособности

```bash
# Статус контейнеров
docker compose ps

# Логи Caddy (сертификат)
docker compose logs caddy

# Логи бэкенда
docker compose logs backend

# Health check API
curl https://xn--32-6kcajl7b5a2b.xn--p1ai/api/health
# Ожидаемый ответ: {"status":"ok"}
```

Открыть сайт в браузере — должен открыться по HTTPS.

---

## Обновление сайта

```bash
git pull
docker compose up -d --build
```

Данные в базе сохраняются — volume `db_data` не удаляется при пересборке.

---

## Полезные команды

```bash
# Остановить всё
docker compose down

# Остановить и удалить данные БД (необратимо!)
docker compose down -v

# Перезапустить один сервис
docker compose restart backend

# Посмотреть логи в реальном времени
docker compose logs -f

# Подключиться внутрь контейнера бэкенда
docker compose exec backend sh
```

---

## Резервная копия базы данных

База хранится в Docker volume. Чтобы сделать бэкап:

```bash
docker run --rm \
  -v attorney_db_data:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/attorney-db-backup.tar.gz -C /data .
```

Файл `attorney-db-backup.tar.gz` появится в текущей директории.

---

## Схема работы

```
Браузер
  │
  ├── :80  → Caddy (редирект на HTTPS)
  └── :443 → Caddy (SSL Let's Encrypt)
               │
               └── frontend:80 (nginx)
                     ├── /         → статика React (dist/)
                     └── /api/     → backend:8000 (FastAPI + Telegram bot)
                                        └── SQLite (volume: db_data)
```
