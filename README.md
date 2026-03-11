# ⚙️ Portfolio Backend Server

> **Original project by [Mashhudur Rahman](https://github.com/mashhudur)**
> If you use or reference this code, please give proper credit. 🙏

---

## 🔗 Live API

🔗 [api.mashhudur.onrender.com](https://api.mashhudur.onrender.com) *(update after deploy)*

---

## ✨ Features

- 🔐 **JWT Authentication** — secure admin login with token
- 🍪 **Cookie Parser** — token stored in httpOnly cookie
- 📁 **Project Management** — CRUD for portfolio projects
- 📬 **Contact/Order System** — stores messages from portfolio form
- 🌐 **CORS Configured** — allows only portfolio & admin frontends
- 🛡️ **Auth Middleware** — protects admin-only routes
- ☁️ **MongoDB Atlas** — cloud database

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Auth | JWT |
| Cookie | Cookie Parser |
| CORS | cors package |
| Env | dotenv |

---

## 📁 Project Structure

```
server/
├── src/
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── project.controller.js
│   │   └── contact.controller.js
│   ├── models/
│   │   ├── Project.model.js
│   │   └── Contact.model.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── project.routes.js
│   │   └── contact.routes.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   └── app.js
├── .env
├── .gitignore
└── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file in root:

```dotenv
MONGO_DB_URL=mongodb+srv://username:password@cluster.mongodb.net/portfolioweb
PORT=3000
JWT_SECRET=your_super_secret_long_string
ADMIN_CODE=your_admin_code
ADMIN_EMAIL=your@email.com
ADMIN_PASSWORD=your_strong_password
PORTFOLIO_URL=https://your-portfolio.vercel.app
ADMIN_URL=https://your-admin.vercel.app
```

> ⚠️ Never push `.env` to GitHub! Make sure `.gitignore` includes `.env`

---

## 🏃 Run Locally

```bash
git clone https://github.com/mashhudur/portfolio-server.git
cd portfolio-server
npm install
npm run dev
```

Server runs on `http://localhost:3000`

---

## 📡 API Endpoints

### Auth
| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/login` | Admin login |
| POST | `/api/auth/logout` | Admin logout |

### Projects
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| GET | `/api/projects` | Get all projects | ❌ |
| POST | `/api/projects` | Add new project | ✅ |
| DELETE | `/api/projects/:id` | Delete project | ✅ |

### Contact
| Method | Route | Description | Auth |
|--------|-------|-------------|------|
| POST | `/api/contact` | Send message | ❌ |
| GET | `/api/contact` | Get all messages | ✅ |

---

## 🚀 Deploy on Render

1. Push code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repo
4. Add all `.env` variables in Render dashboard
5. Deploy!

---

## 🙏 Credit

This backend was built as part of **Mashhudur Rahman's** portfolio system.
Original repository: [github.com/mashhudur](https://github.com/mashhudur)

---

## 📄 License

MIT License — Use with credit to the original author.
