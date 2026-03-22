# AI Text Summarizer

This project is a full-stack web application that summarizes unstructured text and detects sentiment using AI.

```
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
    index.js      # Express app and routes
    llm.js        # OpenAI client and completion call
    prompt.js     # Summarize prompt template
    validate.js   # Input validation and JSON parsing
  .env.example
  package.json
README.md
```

## Prerequisites

- Node.js 
- An API key 

## Server

```bash
cd server
cp .env.example .env
# Edit .env: set OPENAI_API_KEY (and OPENAI_BASE_URL for OpenRouter)
npm install
npm run dev
```

Default URL: `http://localhost:5000`

## Client

```bash
cd client
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Ensure the server is running so summarize requests succeed.

## Environment variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | API key (also accepts legacy `OpenAI_API_KEY`) |
| `OPENAI_BASE_URL` | Optional; use `https://openrouter.ai/api/v1` for OpenRouter |
| `OPENAI_MODEL` | Optional model id (server has a default) |
| `PORT` | Server port (default `5000`) |


## 💡 Future Improvements

* Handle very large text using chunking
* Improve UI with Tailwind
* Add file upload (PDF/Text)

## 👨‍💻 Author

Ayush Raj
