import OpenAI from "openai";

export function createLlmClient() {
  const apiKey = process.env.OPENAI_API_KEY || process.env.OpenAI_API_KEY;
  const baseURL = process.env.OPENAI_BASE_URL;

  if (!apiKey) {
    console.warn(
      "⚠️  OPENAI_API_KEY is missing. Add it to server/.env and restart."
    );
  }

  return new OpenAI({
    apiKey: apiKey ?? "",
    ...(baseURL ? { baseURL } : {}),
  });
}

export async function summarizeWithLlm(client, userPrompt) {
  const response = await client.chat.completions.create({
    model:
      process.env.OPENAI_MODEL || "meta-llama/llama-3.3-70b-instruct",
    messages: [{ role: "user", content: userPrompt }],
    temperature: 0.3,
  });

  return response.choices[0].message.content;
}
