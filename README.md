# Task Manager

A full-stack MERN Task Manager application that helps users create, manage, update, and track tasks efficiently.

## Features

### Task Management

* Create Tasks
* Update Tasks
* Delete Tasks
* Mark Tasks as Complete
* Mark Completed Tasks as Active

### Dashboard

* Active Tasks Counter
* Completed Tasks Counter
* Search Tasks
* Filter Tasks (All, Active, Completed)
* Overdue Task Indicator

### User Experience

* Responsive Design
* Modern UI
* Real-Time Updates
* Loading & Error Handling

---

## Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Axios
* Tailwind CSS
* DaisyUI
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## Project Structure

```text
Taskmanager/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── utils/
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/mugiwarashubham/Taskmanager.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## API Endpoints

### Create Task

```http
POST /tasks/create
```

### Get All Tasks

```http
GET /tasks/getAllTasks
```

### Update Task

```http
PUT /tasks/updateTask/:id
```

### Delete Task

```http
DELETE /tasks/delete/:id
```

---

## Future Enhancements

* User Authentication
* JWT Authorization
* Task Priority Levels
* Task Categories
* Dark Mode
* Notifications
* Drag & Drop Task Management

---

## Author

**Shubham Kumar**

GitHub: https://github.com/mugiwarashubham
