# Инструкция по развёртыванию на реальном сервере

Ниже — пошаговая инструкция для корректного запуска приложения на боевом сервере с вашим доменом, HTTPS и Docker Compose.

## 1. Подготовка сервера

Подключитесь к серверу по SSH и выполните:

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo systemctl enable --now docker

docker --version
docker compose version
```

Если хотите запускать Docker без sudo:

```bash
sudo usermod -aG docker $USER
newgrp docker
```

---

## 2. Клонируйте проект на сервер

```bash
git clone <URL_репозитория> /opt/projects/attorney
cd /opt/projects/attorney
```

Если проект уже есть на сервере:

```bash
cd /opt/projects/attorney
git pull
```

---

## 3. Настройте домен в DNS

У вашего домена нужно создать A-запись:

- тип: A
- имя: @
- значение: IP вашего сервера

Если хотите также использовать www, добавьте CNAME:

- тип: CNAME
- имя: www
- значение: ваш-домен.ru

> DNS может обновляться от нескольких минут до нескольких часов. Перед запуском стоит подождать, пока запись начнёт резолвиться.

Проверьте DNS на сервере:

```bash
nslookup your-domain.ru
ping your-domain.ru
```

---

## 4. Укажите домен в конфигурации

### В файле Caddyfile

Откройте [Caddyfile](Caddyfile) и замените пример домена на ваш:

```caddy
your-domain.ru {
    reverse_proxy frontend:80
}
```

### В файле docker-compose.yml

В секции frontend проверьте переменные сборки:

```yaml
frontend:
  build:
    args:
      VITE_SITE_URL: "https://your-domain.ru"
      VITE_API_URL: ""
```

---

## 5. Настройте переменные окружения

Создайте файл с переменными для бэкенда:

```bash
cp backend/.env.example backend/.env
nano backend/.env
```

Заполните его так:

```env
BOT_TOKEN=токен_от_BotFather
ADMIN_CHAT_IDS=123456789
SITE_URL=https://your-domain.ru
```

Важно:
- `BOT_TOKEN` получите у @BotFather
- `ADMIN_CHAT_IDS` — ID админов через запятую
- `SITE_URL` — ваш публичный домен с https://

---

## 6. Убедитесь, что открыты порты 80 и 443

На сервере должны быть доступны порты:

- 80 — HTTP
- 443 — HTTPS

Если у вас VPS/облачный сервер, это обычно нужно открыть в firewall/security group.

Для UFW можно сделать так:

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

---

## 7. Запустите приложение

Из корня проекта:

```bash
cd /opt/projects/attorney
docker compose up -d --build
```

Первый запуск может занять несколько минут.

---

## 8. Проверьте статус контейнеров

```bash
docker compose ps
```

Проверьте логи:

```bash
docker compose logs backend
docker compose logs caddy
```

---

## 9. Проверьте работу сайта

Откройте в браузере:

```text
https://your-domain.ru
```

Проверьте API:

```bash
curl https://your-domain.ru/api/health
```

Ожидаемый ответ:

```json
{"status":"ok"}
```

---

## 10. Если HTTPS не работает

Если сайт не открывается по HTTPS, проверьте следующее:

### 10.1. DNS до сих пор не обновился

```bash
nslookup your-domain.ru
```

### 10.2. Порты 80/443 закрыты

Проверьте доступность извне и firewall.

### 10.3. Caddy не может получить сертификат

Смотрите логи:

```bash
docker compose logs caddy
```

Обычно проблема связана с:
- DNS
- firewall
- отсутствием доступа к внешним ACME-серверам
- неверно указанным доменом в Caddyfile

---

## 11. Обновление приложения

После изменений в проекте:

```bash
cd /opt/projects/attorney
git pull
docker compose up -d --build
```

---

## 12. Полезные команды

```bash
# Остановить контейнеры
docker compose down

# Перезапустить один сервис
docker compose restart backend

# Посмотреть логи в реальном времени
docker compose logs -f

# Удалить базу данных целиком (только если надо)
docker compose down -v
```

---

## 13. Что должно быть в итоге

После успешного развёртывания должны быть доступны:

- сайт по HTTPS: `https://your-domain.ru`
- API: `https://your-domain.ru/api/health`
- Telegram-бот должен работать в фоне через контейнер backend
