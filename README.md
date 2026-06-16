<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=Piyush%20Bhajikhaye&fontSize=42&fontColor=fff&animation=twinkling&fontAlignY=32&desc=Full%20Stack%20Portfolio%20Website&descAlignY=55&descSize=18" width="100%"/>

# ⚡ Full Stack Portfolio Website

**Production-ready personal portfolio — React · TypeScript · MongoDB · Cloudflare Workers**

<p align="center">
  <a href="https://portfolio.piyushbhajikhaye.workers.dev" target="_blank">
    <img src="https://img.shields.io/badge/🌐 Live Demo-Visit Now-6366f1?style=for-the-badge&logoColor=white" alt="Live Demo"/>
  </a>
</p>

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<br/>

> *Transforming data into insights, insights into intelligence, and intelligence into impact.*
> *A modern portfolio showcasing Data Analytics, Data Science & AI/ML projects.*

<br/>

</div>

---

## 🚀 Live Deployment

| Service | URL | Platform |
|---------|-----|----------|
| 🌐 **Frontend** | [portfolio.piyushbhajikhaye.workers.dev](https://portfolio.piyushbhajikhaye.workers.dev) | Cloudflare Workers |
| ⚙️ **Backend API** | [portfolio-backend-i12w.onrender.com](https://portfolio-backend-i12w.onrender.com) | Render |
| 🗄️ **Database** | MongoDB Atlas (Mumbai Region) | AWS ap-south-1 |

---

## ✨ Features

- 🎨 **Futuristic Dark UI** — Deep purple gradients + cyan accents with Framer Motion animations
- 📊 **Data Science Showcase** — ML projects, dashboards, and analytics work
- 📬 **Smart Contact Form** — Messages stored in MongoDB Atlas + email notifications
- 🔐 **Admin / Auth Integration** — Secured backend with Supabase authentication
- 📱 **Fully Responsive** — Pixel-perfect on mobile, tablet & desktop
- ⚡ **Edge-Deployed Frontend** — Cloudflare Workers for global low-latency delivery
- 🌐 **SSR Architecture** — TanStack Start for server-side rendering
- 📄 **Resume Download** — One-click PDF resume download

---

## 🛠️ Tech Stack

### 🖥️ Frontend

| Technology | Purpose |
|---|---|
| **React 19 + TypeScript** | UI framework with full type safety |
| **Vite 7** | Lightning-fast build tool & HMR |
| **TanStack Start** | SSR framework for React |
| **TanStack Router** | Type-safe file-based routing |
| **TanStack Query** | Async state & server data management |
| **Tailwind CSS** | Utility-first responsive styling |
| **Framer Motion** | Smooth animations & transitions |
| **Radix UI** | Accessible headless UI primitives |
| **Lucide React** | Beautiful consistent icon library |
| **Supabase Client** | Auth & real-time data integration |

### ⚙️ Backend

| Technology | Purpose |
|---|---|
| **Node.js + Express** | REST API server |
| **MongoDB Atlas** | Cloud database for contact messages |
| **Nodemailer** | Email notifications on form submission |
| **dotenv** | Secure environment variable management |
| **CORS** | Cross-origin request handling |

### ☁️ Infrastructure & Deployment

| Service | Purpose |
|---------|---------|
| **Cloudflare Workers** | Frontend SSR edge deployment |
| **Render** | Backend Node.js hosting |
| **MongoDB Atlas** | Managed cloud database (Mumbai) |
| **GitHub** | Version control & CI/CD trigger |
| **Wrangler CLI** | Cloudflare deployment tooling |

---

## 📁 Project Structure

```
portfolio/
├── 📂 frontend/                    # React + TanStack Start SSR app
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── 📂 portfolio/       # Hero, About, Skills, Projects...
│   │   │   └── 📂 ui/              # Radix UI components
│   │   ├── 📂 routes/              # File-based routing (TanStack)
│   │   ├── 📂 data/                # portfolio.ts — all your data
│   │   ├── 📂 assets/              # Images, skill icons, resume PDF
│   │   └── 📂 lib/                 # Utilities & analytics
│   ├── 📄 wrangler.jsonc           # Cloudflare Workers config
│   └── 📄 vite.config.ts           # Vite + TanStack Start config
│
├── 📂 backend/                     # Express + MongoDB API server
│   ├── 📄 index.js                 # API entry point
│   └── 📄 .env.example             # Required environment variables
│
└── 📄 README.md
```

> ⚠️ **Important:** Frontend and backend are intentionally separated. Run them independently from their respective folders.

---

## 🚀 Getting Started Locally

### Prerequisites

- ✅ **Node.js** 20+ ([Download](https://nodejs.org/))
- ✅ **npm** 10+ or compatible package manager
- ✅ **MongoDB** instance (local or [Atlas](https://www.mongodb.com/atlas))
- ✅ **SMTP credentials** for email notifications (Gmail recommended)

### ⚡ Local Setup

#### 1. Clone the repository

```bash
git clone https://github.com/Piyush25800/portfolio.git
cd portfolio
```

#### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

🌐 Opens at **[http://localhost:5173](http://localhost:5173)**

#### 3. Start the Backend

```bash
cd backend
npm install
npm run dev
```

🔌 API runs on **[http://localhost:4000](http://localhost:4000)**

---

## 🔑 Environment Variables

Copy `.env.example` to `.env` in the `backend/` folder:

```bash
cp backend/.env.example backend/.env
```

```env
# 🗄️ Database
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio
MONGODB_DB=portfolio

# 📧 Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-gmail-app-password
EMAIL_FROM=your-gmail@gmail.com
EMAIL_TO=your-gmail@gmail.com
EMAIL_SUBJECT=New contact message from portfolio

# 🔌 Server
PORT=4000
```

---

## ☁️ Deployment Guide

### Frontend — Cloudflare Workers

```bash
cd frontend
npm install
npm run build
npx wrangler login
npx wrangler deploy
```

Live at: `https://portfolio.[your-account].workers.dev`

### Backend — Render.com

1. Connect GitHub repo on [render.com](https://render.com)
2. Set **Root Directory** → `backend`
3. **Build Command** → `npm install`
4. **Start Command** → `node index.js`
5. Add all environment variables in Render dashboard
6. Deploy!

### Database — MongoDB Atlas

1. Create free cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Add IP `0.0.0.0/0` in Network Access
3. Copy connection string to `MONGODB_URI`

---

## 📬 Contact Form Workflow

```
Visitor fills contact form
         ↓
Cloudflare Workers (Frontend SSR)
         ↓
POST https://portfolio-backend-i12w.onrender.com/contact
         ↓
Express validates & stores in MongoDB Atlas
         ↓
Nodemailer sends email notification 📧
         ↓
Frontend shows success feedback ✅
```

---

## 📸 Portfolio Sections

| Section | Description |
|---------|-------------|
| 🦸 **Hero** | Animated intro with role & social links |
| 👤 **About** | Background, interests & personality |
| 🛠️ **Skills** | Python, SQL, Power BI, ML & more |
| 📊 **Projects** | Real data science & analytics projects |
| 💼 **Experience** | Work history & internships |
| 🏆 **Achievements** | Certifications & accomplishments |
| 🎓 **Education** | Academic background |
| 📄 **Resume** | Downloadable PDF resume |
| 📬 **Contact** | Live contact form with MongoDB storage |

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it for your own portfolio!

---

<div align="center">

**Built with ❤️ by Piyush Bhajikhaye**

*Data Analyst · Business Analyst · Data Scientist*

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-Live-6366f1?style=for-the-badge)](https://portfolio.piyushbhajikhaye.workers.dev)
[![GitHub](https://img.shields.io/badge/GitHub-Piyush25800-181717?style=for-the-badge&logo=github)](https://github.com/Piyush25800)

⭐ **Star this repo if you found it helpful!**

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

</div>
