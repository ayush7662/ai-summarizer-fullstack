import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { buildSummarizePrompt } from "./prompt.js";
import { createLlmClient, summarizeWithLlm } from "./llm.js";
import { validateInputText, parseSummarizeJson } from "./validate.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const app = express();
const client = createLlmClient();

app.use(cors());
app.use(express.json());

app.post("/api/summarize", async (req, res) => {
  const validation = validateInputText(req.body?.text);
  if (!validation.ok) {
    return res.status(400).json({ error: validation.error });
  }

  try {
    const prompt = buildSummarizePrompt(validation.text);
    const rawOutput = await summarizeWithLlm(client, prompt);
    const parsed = parseSummarizeJson(rawOutput);

    if (!parsed.ok) {
      return res.status(500).json({
        error: parsed.error,
        raw: parsed.raw,
      });
    }

    return res.json(parsed.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to summarize text" });
  }
});

const port = Number(process.env.PORT) || 5000;
app.listen(port, () => {
  console.log(`✅ server running at http://localhost:${port}`);
});
