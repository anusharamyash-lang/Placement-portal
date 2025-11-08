<h1 align="center">🎓 CampusHire Portal</h1>
<p align="center">
  <b>A full-stack placement management system</b> built to simplify campus hiring and internship coordination for students, TPOs, and management.
</p>

<p align="center">
  <a href="https://github.com/AnirudhKaplish/CampusHire-Portal/stargazers"><img src="https://img.shields.io/github/stars/AnirudhKaplish/CampusHire-Portal?color=yellow" alt="Stars Badge"/></a>
  <a href="https://github.com/AnirudhKaplish/CampusHire-Portal/network/members"><img src="https://img.shields.io/github/forks/AnirudhKaplish/CampusHire-Portal?color=orange" alt="Forks Badge"/></a>
  <a href="https://github.com/AnirudhKaplish/CampusHire-Portal/issues"><img src="https://img.shields.io/github/issues/AnirudhKaplish/CampusHire-Portal?color=red" alt="Issues Badge"/></a>
  <a href="https://github.com/AnirudhKaplish/CampusHire-Portal/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License Badge"/></a>
</p>

---

## 🧭 Overview

**CampusHire Portal** is a full-stack web application that streamlines the placement process in educational institutions. 
It provides dedicated panels for **Students**, **TPOs (Training & Placement Officers)**, and **Superusers/Management**, ensuring efficient handling of recruitment data and processes.

---

## 🛠️ Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | React.js, Tailwind CSS, Axios, Vite |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ORM) |
| **Authentication** | JWT |
| **File Storage** | Cloudinary |
| **Email Service** | Nodemailer |
| **Environment Config** | dotenv |

---
## 🗂️ Folder Structure
```

college-placement-management-system-main/
│
├── backend/
│ ├── config/ \# Cloudinary, MongoDB, Multer, Nodemailer setup
│ ├── controllers/ \# API business logic
│ ├── middleware/ \# Authentication middleware
│ ├── models/ \# Mongoose schemas
│ ├── routes/ \# API routes
│ ├── utlis/ \# Helper functions
│ ├── .env (ignored)
│ └── index.js
│
├── frontend/
│ ├── src/ \# React components, hooks, pages
│ ├── public/
│ └── vite.config.js
│
└── .gitignore

```

---

## 🔐 .gitignore Configuration

These files are **kept local** and never uploaded to GitHub:

```

backend/node\_modules/
backend/\*.env
backend/Extra/
frontend/node\_modules/
frontend/build/

````

✅ Keeps your repo clean and your credentials safe.

---

## ⚙️ Setup Instructions

### 🔹 1. Clone the Repository

```bash
git clone [https://github.com/AnirudhKaplish/CampusHire-Portal.git](https://github.com/AnirudhKaplish/CampusHire-Portal.git)
cd CampusHire-Portal
````

### 🔹 2. Setup Backend

```bash
cd backend
npm install
npm start
```

**Environment Variables:**
Create a `.env` file inside the `backend` folder with your credentials:

```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### 🔹 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` by default.

-----

## ✨ Features

  * 🔐 **Secure JWT Authentication**
  * 👨‍🎓 **Student Dashboard** — Apply for jobs, upload resumes, track offers
  * 🧑‍💼 **TPO Panel** — Post jobs, manage applicants, and view statistics
  * 🏢 **Superuser Dashboard** — Oversee all users and placement data
  * ☁️ **Cloud-based Resume & Offer Letter Uploads** (Cloudinary)
  * 📢 **Notice Management System**
  * 📧 **Automated Email Notifications** (Nodemailer)
  * 🪶 **Responsive UI** with Tailwind CSS

-----

## 🧠 Future Enhancements

  * 📊 Admin Analytics Dashboard
  * 🕵️ Real-time Notifications (Socket.io)
  * 🌐 Multi-institution Support
  * 📱 Progressive Web App (PWA) Support

-----

## 💡 How to Push to GitHub (In Case You Recreate)

```bash
# Step 1: Initialize Git
git init

# Step 2: Stage all files
git add .

# Step 3: Commit your code
git commit -m "Initial commit for CampusHire Portal"

# Step 4: Add remote repo
git remote add origin [https://github.com/AnirudhKaplish/CampusHire-Portal.git](https://github.com/AnirudhKaplish/CampusHire-Portal.git)

# Step 5: Push to GitHub
git branch -M main
git push -u origin main
```

-----

## 🌍 Deployment

  * **Frontend:** Vercel / Netlify
  * **Backend:** Render / Railway / Heroku
  * **Database:** MongoDB Atlas

-----

## 👨‍💻 Author

**Anirudh Kaplish**
💼 Full-Stack Developer | UI/UX Designer | Innovator

  * [GitHub](https://www.google.com/search?q=https://github.com/AnirudhKaplish)
  * [LinkedIn](https://www.google.com/search?q=https://linkedin.com/in/AnirudhKaplish)

-----

## 🪶 License

This project is licensed under the **MIT License**.

> 💬 “CampusHire Portal is not just a system — it’s a bridge between opportunity and talent.” ✨
