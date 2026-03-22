export function validateInputText(text) {
  const trimmed = text?.trim();
  if (!trimmed) {
    return { ok: false, error: "Input text is required" };
  }
  return { ok: true, text: trimmed };
}

export function parseSummarizeJson(rawOutput) {
  try {
    const parsed = JSON.parse(rawOutput);
    return { ok: true, data: parsed };
  } catch {
    return {
      ok: false,
      error: "Model return invalid JSON",
      raw: rawOutput,
    };
  }
}
