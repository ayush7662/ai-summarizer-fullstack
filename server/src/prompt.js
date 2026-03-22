export function buildSummarizePrompt(text) {
  return `
     You are an assistant that converts unstructured text into strict JSON.
     
     Return ONLY valid JSON in this format:
     {
     "summary": "one sentence",
     "keyPoints": ["point 1", "point 2", "point 3"],
     "sentiment": "positive | neutral | negative"
}
     
Rules:
- summary must be exactly one sentence
- keyPoints must be exactly 3 short points
- sentiment must be one of the allowed values
- do not include markdown
- do not include extra text

Text:
${text}
`;
}
