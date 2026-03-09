# 💰 CoinFlow — Sales Tracker App

A fullstack sales tracking application built with React and Node.js. Designed for small business owners to track daily orders and monitor sales performance.

## 🚀 Live Demo
> Coming soon

---

## ✨ Features

- 🔐 User authentication (Register & Login)
- 📦 Add, view, and delete orders
- 📊 Dashboard with real-time stats:
  - Today's total sales
  - This month's total sales
  - Most sold item
- 🛡️ Protected routes (auth required)

---

## 🛠️ Tech Stack

**Frontend**
- React 19 + Vite
- Tailwind CSS
- React Router DOM
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs

---

## 📁 Project Structure

```
coinflow/
├── coinflow-server/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
└── coinflow-client/
    └── src/
        ├── api/
        ├── components/
        ├── context/
        └── pages/
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
```bash
cd coinflow-server
npm install
# Create .env file:
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret
# PORT=5000
npm run dev
```

### Frontend Setup
```bash
cd coinflow-client
npm install
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register user | ❌ |
| POST | `/api/auth/login` | Login user | ❌ |
| POST | `/api/orders` | Add order | ✅ |
| GET | `/api/orders` | Get all orders | ✅ |
| DELETE | `/api/orders/:id` | Delete order | ✅ |
| GET | `/api/orders/stats/today` | Today's total | ✅ |
| GET | `/api/orders/stats/month` | Month's total | ✅ |
| GET | `/api/orders/stats/most-sold` | Most sold item | ✅ |

---

## 👤 Author

**Adam Faiq** — [@Adamfaiq](https://github.com/Adamfaiq)
