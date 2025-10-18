# 🧙‍♂️ Backend Wizard Profile

A simple **Node.js + Express** API that serves basic user info and a random cat fact from an external API (`https://catfact.ninja/fact`).  
Built for learning and backend testing purposes.

---

## 🚀 Features
- Express.js backend
- Fetches a random cat fact using Axios
- Returns a clean JSON response with:
  - Developer info (email, name, stack)
  - Random cat fact
  - Timestamp
- Ready for deployment (e.g., Railway, Render, or Vercel)

---

## 🧩 API Endpoint

### **GET** `/me`

#### Example Request:
```bash
curl https://your-app-url.onrender.com/me
````

#### Example Response:

```json
{
  "status": "success",
  "user": {
    "email": "Ahmerd196@gmail.com",
    "name": "Ahmad Abdurrahman Muhammad",
    "stack": "node.js/express"
  },
  "timestamp": "2025-10-18T01:00:00.000Z",
  "fact": "Cats sleep 70% of their lives."
}
```

---

## 🛠️ Setup and Installation

### Prerequisites

* [Node.js](https://nodejs.org/) v18 or later
* [npm](https://www.npmjs.com/)
* Git

### Steps

```bash
# Clone the repository
git clone https://github.com/Ahmerd196/backend-wizard-profile.git

# Navigate into the folder
cd backend-wizard-profile

# Install dependencies
npm install

# Start the development server
npm run dev
```

The server will start on:

```
http://localhost:3000/me
```

---

## 🔁 Scripts

| Command       | Description                                           |
| ------------- | ----------------------------------------------------- |
| `npm start`   | Starts the production server                          |
| `npm run dev` | Starts the server in development mode (using nodemon) |

---

## ☁️ Deployment

This app can be easily deployed to:

* [Railway](https://railway.app/)
* [Render](https://render.com/)
* [Vercel](https://vercel.com/)

### Railway Deployment (Quick Guide)

1. Push your project to GitHub.
2. Go to [https://railway.app](https://railway.app).
3. Click **New Project → Deploy from GitHub Repo**.
4. Select your `backend-wizard-profile` repository.
5. Railway will automatically detect the `PORT` and start the app.

---

## 👤 Author

**Ahmad Abdurrahman Muhammad**
📧 Email: [Ahmerd196@gmail.com](mailto:Ahmerd196@gmail.com)
💻 Stack: Node.js / Express.js

---
 Fun Fact

> Every time you hit `/me`, you’ll get a new random cat fact 😺

```
