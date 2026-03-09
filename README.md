# 💰 CoinFlow Client — Frontend

React frontend for CoinFlow, a sales tracking app for small business owners.

> 🔗 Backend repo: [coinflow-server]([https://github.com/Adamfaiq/coinflow-server](https://github.com/Adamfaiq/ecommerce-api-server/tree/main))

## ✨ Features

- 🔐 Login & Register
- 📦 Add, view, delete orders
- 📊 Dashboard — today's sales, month total, most sold item
- 🛡️ Protected routes (redirect if not logged in)

## 🛠️ Tech Stack

- React 19 + Vite
- Tailwind CSS
- React Router DOM
- Axios

## 📁 Project Structure

```
src/
├── api/
│   └── axios.js         ← base URL config
├── components/
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx  ← global auth state
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Orders.jsx
│   └── Dashboard.jsx
└── App.jsx
```

## ⚙️ Getting Started

```bash
npm install
npm run dev
```

> Make sure backend is running on `http://localhost:5000`

## 👤 Author

**Adam Faiq** — [@Adamfaiq](https://github.com/Adamfaiq)
