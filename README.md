# Blimp Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![NGINX](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)


This is the frontend for the **Blimp** application, built with React, containerized using Docker, and served via `serve` with reverse proxy support through NGINX. For the backend part, please take a look at [Blimp backend](https://github.com/SreeHarshan/Blimp-backend).

---

## 📦 Features

- React-based single-page application
- Dockerized for consistent deployment
- Reverse proxied by NGINX

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/blimp.git
cd blimp
```

---

### 2. Configure Base URL

In `package.json`, set:

```json
"homepage": "/<your-base-url>"
```

### 3. Docker Setup for Base URL

In `dockerfile`, set:

```dockerfile
ENV PUBLIC_URL=/<your-base-url>
```

### 4. Build and Run

```bash
docker build -t blimp-frontend .
docker run -d -p 3000:80 --name blimp-ui blimp-frontend
```

Thank you for a taking a look at this 😊


