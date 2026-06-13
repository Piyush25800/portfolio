<div align="center">

# 🚀 Full Stack Portfolio Website

**A modern, production-ready portfolio built with React + Express + MongoDB**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<br/>

> *A professional portfolio website with a clean separation of frontend and backend — featuring real-time contact form submissions, email notifications, and a sleek modern design.*

<br/>

![Portfolio Preview](https://via.placeholder.com/900x500/0f172a/38bdf8?text=🚀+Full+Stack+Portfolio)

</div>

---

## ✨ Features

- 🎨 **Modern UI** — Built with Tailwind CSS & Framer Motion for smooth animations
- 📬 **Contact Form** — Messages stored in MongoDB + instant email notifications via Nodemailer
- 🔐 **Admin / Auth Integration** — Secured backend with authentication support
- 📱 **Fully Responsive** — Looks great on all screen sizes
- ⚡ **Blazing Fast** — Powered by Vite for lightning-fast HMR and builds
- 🌐 **Clean Architecture** — Frontend and backend are completely separated for maintainability

---

## 🛠️ Tech Stack

### 🖥️ Frontend

| Technology | Purpose |
|---|---|
| **React + TypeScript** | UI framework with type safety |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations & transitions |
| **TanStack Router** | Client-side routing |
| **TanStack Query** | Server state management |
| **Radix UI** | Accessible UI primitives |
| **Lucide React** | Beautiful icon library |
| **Supabase Client** | Backend-as-a-service integration |

### ⚙️ Backend

| Technology | Purpose |
|---|---|
| **Node.js + Express** | REST API server |
| **MongoDB** | Database for contact messages |
| **Nodemailer** | Email notifications on form submission |
| **dotenv** | Environment variable management |
| **CORS** | Cross-origin request handling |

---

## 📁 Project Structure

```
portfolio/
├── 📂 frontend/          # React + Vite frontend application
│   └── 📂 src/           # All frontend source code
│
├── 📂 backend/           # Express + MongoDB API server
│   ├── 📄 index.js       # Backend entry point
│   └── 📄 .env.example   # Required environment variable template
│
└── 📄 README.md
```

> ⚠️ **Important:** The frontend and backend are **intentionally separated**. Running `npm run dev` from the root folder will fail. Always use the `frontend/` and `backend/` folders separately.

---

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have:

- ✅ **Node.js** 20+ ([Download](https://nodejs.org/))
- ✅ **npm** 10+ or compatible package manager
- ✅ **MongoDB** instance (local or [Atlas](https://www.mongodb.com/atlas))
- ✅ **SMTP credentials** for email notifications (Gmail recommended)

---

### ⚡ Local Setup

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

#### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

🌐 Open the URL shown in the terminal — usually **[http://localhost:5173](http://localhost:5173)**

#### 3. Start the Backend

```bash
cd backend
npm install
npm run dev
```

🔌 The backend API runs on **port 4000** by default — **[http://localhost:4000](http://localhost:4000)**

---

## 🔑 Environment Variables

Navigate to the `backend/` folder and create a `.env` file from the provided template:

```bash
cp .env.example .env
```

Fill in the following values:

```env
# 🗄️ Database
MONGODB_URI=mongodb://localhost:27017
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

## 📧 Setting Up Gmail Email Notifications

To enable contact form email delivery using Gmail:

1. Visit [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Generate an **App Password** for "Mail"
3. Set `SMTP_PASS` to the generated app password
4. Keep `SMTP_HOST=smtp.gmail.com` and `SMTP_PORT=587`

> 💡 App Passwords bypass 2FA and work perfectly for SMTP — no need to lower Google account security.

---

## 📬 Contact Form Workflow

Here's how a message travels from visitor to your inbox:

```
User fills contact form
        ↓
Frontend sends POST → http://localhost:4000/contact
        ↓
Backend validates & stores message in MongoDB
        ↓
Backend sends email notification to configured address
        ↓
Frontend displays success or validation feedback ✅
```

---

## 📸 Screenshots

> *Add your own screenshots here to make your README stand out!*

| Home Page | Projects Section | Contact Form |
|:---------:|:----------------:|:------------:|
| ![Home](https://via.placeholder.com/280x160/0f172a/38bdf8?text=Home) | ![Projects](https://via.placeholder.com/280x160/0f172a/a78bfa?text=Projects) | ![Contact](https://via.placeholder.com/280x160/0f172a/34d399?text=Contact) |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use it for your own portfolio!

---

<div align="center">

**Made with ❤️ using React, Express & MongoDB**

⭐ If you found this helpful, please consider giving it a star!

</div>
