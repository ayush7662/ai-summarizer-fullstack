function sentimentBadgeClass(sentiment) {
  const s = String(sentiment ?? "")
    .toLowerCase()
    .trim();
  if (s.includes("positive")) {
    return "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200/80";
  }
  if (s.includes("negative")) {
    return "bg-red-100 text-red-800 ring-1 ring-red-200/80";
  }
  return "bg-gray-100 text-gray-700 ring-1 ring-gray-200/80";
}

export default function ResultCard({ result }) {
  if (!result) return null;

  const keyPoints = Array.isArray(result.keyPoints) ? result.keyPoints : [];

  return (
    <section
      className="space-y-6 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-md sm:p-8"
      aria-live="polite"
    >
      <div>
        <h2 className="text-lg font-bold text-slate-900">Summary</h2>
        <p className="mt-2 text-base leading-relaxed text-slate-700">
          {result.summary}
        </p>
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900">Key Points</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700 marker:text-slate-400">
          {keyPoints.map((point, i) => (
            <li key={i} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <h2 className="text-lg font-bold text-slate-900">Sentiment</h2>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide sm:text-sm ${sentimentBadgeClass(result.sentiment)}`}
        >
          {result.sentiment}
        </span>
      </div>
    </section>
  );
}
