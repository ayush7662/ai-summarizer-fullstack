# 🚀 AI Text Summarizer & Sentiment Analyzer

A full-stack AI-powered application that processes unstructured text and converts it into meaningful structured insights using Large Language Models.

---

## 📌 Overview

This project summarizes unstructured text, extracts key points, and detects sentiment (positive/negative/neutral) using AI.

---

## 🌍 Live Demo

Github Link: https://github.com/ayush7662/ai-summarizer-fullstack

Live Link: https://ai-summarizer-fullstack-1zeu.vercel.app/

video Link: 

---

## 🚀 Features

* Summarizes large unstructured text
* Extracts key bullet points
* Performs sentiment analysis
* Full-stack application (React + Node.js + Express)
* Clean and simple user interface

---

## 🛠 Tech Stack

* **Frontend:** React (Vite)
* **Backend:** Node.js, Express
* **AI:** OpenAI API

---

## 📁 Project Structure

```
assignment-summarizer/
  client/
    src/
      App.jsx
      main.jsx
      components/
        ResultCard.jsx
    index.html
    package.json
  server/
    src/
      index.js
      llm.js
      prompt.js
      validate.js
    .env.example
    package.json
  README.md
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Repository

git clone <https://github.com/ayush7662/ai-summarizer-fullstack>

---

### 🔹 2. Setup Server

cd server
npm install

Create `.env` file:
OPENAI_API_KEY=your_api_key_here

Run server:
npm run dev

Server runs at:
http://localhost:5000

---

### 🔹 3. Setup Client

cd client
npm install
npm run dev

Open:
http://localhost:5173

---

## 📷 Output Screenshot

(Add your screenshot here as screenshot.png)

---

## 🔐 Environment Variables

| Variable        | Description                |
| --------------- | -------------------------- |
| OPENAI_API_KEY  | API key                    |
| OPENAI_BASE_URL | Optional (for OpenRouter)  |
| OPENAI_MODEL    | Optional model             |
| PORT            | Server port (default 5000) |

---

## 💡 Future Improvements

* Handle large text using chunking
* Improve UI with Tailwind CSS
* Add file upload (PDF/Text)

---

## 👨‍💻 Author

Ayush Raj
