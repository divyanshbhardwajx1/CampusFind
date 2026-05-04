# 🚀 CampusFind – Smart Lost & Found System

A full-stack web application designed to streamline the process of reporting, tracking, and claiming lost and found items within a campus environment.

---

## 📌 Overview

CampusFind provides a centralized and efficient platform where users can:

* Report lost items 📉
* Report found items 📈
* Search items easily 🔍
* Claim items securely 🔐
* Enable admin verification for authenticity 👨‍💼

---

## 🧱 Tech Stack

### 🌐 Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Bootstrap

### ⚙️ Backend

* Node.js
* Express.js

### 🗄 Database

* MongoDB
* Mongoose

### 🔗 Communication

* REST APIs (Fetch API)

---

## ✨ Features

### 👤 User Features

* User Registration & Login
* Report Lost Items
* Report Found Items
* Search functionality
* Claim items (with validation logic)

### 👨‍💼 Admin Features

* View all reported items
* Approve / Reject claims
* Delete invalid or spam entries
* Monitor user activity

---

## 🔄 System Workflow

```text id="workflow"
Active → Pending → Claimed → Returned
```

---

## 📂 Project Structure

```text id="structure"
CampusFind/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── css/
├── js/
├── *.html
├── .gitignore
└── README.md
```

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository

```bash id="clone"
git clone https://github.com/divyanshbhardwajx1/CampusFind.git
cd CampusFind
```

---

### 2️⃣ Install Backend Dependencies

```bash id="install"
cd backend
npm install
```

---

### 3️⃣ Start MongoDB

```bash id="mongod"
mongod
```

---

### 4️⃣ Run Backend Server

```bash id="server"
node server.js
```

---

### 5️⃣ Run Frontend

* Open `index.html` using browser
* OR use Live Server in VS Code

---

## 🌐 API Endpoints

### 🔐 Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

### 📦 Items

* GET `/api/items`
* POST `/api/items`
* PUT `/api/items/:id`
* DELETE `/api/items/:id`

---

## 📊 Current Status

* ✅ Backend fully implemented
* ✅ MongoDB integrated
* ✅ Authentication system working
* ✅ Admin panel functional
* 🔄 Frontend fully connected to APIs

---

## 🚧 Future Enhancements

* JWT-based authentication
* Password hashing (bcrypt)
* Image upload for items
* Email notifications
* Real-time updates (WebSockets)

---

## 💡 Key Learning Outcomes

* Full-stack web development
* REST API design
* MongoDB integration
* Authentication & session handling
* Role-based access control (Admin/User)
* Git & GitHub workflow

---

## 👨‍💻 Author

**Divyansh Bhardwaj**
Cybersecurity Enthusiast | Developer

---

## 📌 License

This project is developed for academic and educational purposes.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
