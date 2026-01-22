export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

type Source = {
  title: string;
  url: string;
  snippet: string;
};

function safeJsonParse(text: string) {
  // Gemini sometimes wraps JSON in ```json ... ```
  const cleaned = text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();

  return JSON.parse(cleaned);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const statement = String(body?.statement ?? "").trim();

    if (!statement || statement.length < 5) {
      return NextResponse.json(
        { error: "Please enter a longer statement (at least 5 characters)." },
        { status: 400 }
      );
    }

    // ✅ ENV CHECKS
    const serperKey = process.env.SERPER_API_KEY;
    if (!serperKey) {
      return NextResponse.json({ error: "Missing SERPER_API_KEY" }, { status: 500 });
    }

    const geminiKey = process.env.GEMINI_API_KEY;
    if (!geminiKey) {
      return NextResponse.json({ error: "Missing GEMINI_API_KEY" }, { status: 500 });
    }

    // ---------- 1) SEARCH (Serper) ----------
    const trusted =
      "site:cdc.gov OR site:nih.gov OR site:medlineplus.gov OR site:who.int OR site:mayoclinic.org OR site:nhs.uk";

    const searchRes = await fetch("https://google.serper.dev/search", {
      method: "POST",
      headers: {
        "X-API-KEY": serperKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: `${statement} (${trusted})`,
        num: 5,
      }),
    });

    if (!searchRes.ok) {
      const t = await searchRes.text();
      return NextResponse.json(
        { error: "Serper search failed", status: searchRes.status, details: t },
        { status: 500 }
      );
    }

    const searchJson = await searchRes.json();
    const sources: Source[] = (searchJson?.organic || [])
      .filter((r: any) => r?.title && r?.link && r?.snippet)
      .slice(0, 5)
      .map((r: any) => ({
        title: r.title,
        url: r.link,
        snippet: r.snippet,
      }));

    // If we couldn't fetch sources, return a safe response (still JSON)
    if (!sources.length) {
      return NextResponse.json({
        verdict: "Insufficient evidence",
        confidence: 0.2,
        summary:
          "I couldn’t retrieve trusted medical sources for this statement. Try rephrasing with more context.",
        explanation: [
          "Add the condition (e.g., type 2 diabetes) or population (e.g., children) for better results.",
          "We prioritize trusted public health and medical sources (CDC/NIH/WHO/NHS/Mayo).",
        ],
        sources: [],
        safety_note:
          "Informational support only. Not medical advice. For emergencies, contact local emergency services.",
      });
    }

    // ---------- 2) GEMINI ----------
    const genAI = new GoogleGenerativeAI(geminiKey);
    const MODEL_NAME = "gemini-2.5-flash-lite";
    console.log("MYTHBUSTER using model:", MODEL_NAME);

    const model = genAI.getGenerativeModel({ model: MODEL_NAME });


    const prompt = `
You are MythBuster, a medical fact-checking assistant.

Task:
- Decide if the statement is "Correct", "Incorrect", or "Partially correct".
- If the sources do not support a clear conclusion, use "Insufficient evidence".
- Use ONLY the sources provided below. Do NOT invent facts or sources.
- Do NOT provide medical advice. Keep it informational.

Return STRICT JSON ONLY (no markdown, no backticks, no extra text):
{
  "verdict": "Correct" | "Incorrect" | "Partially correct" | "Insufficient evidence",
  "confidence": number,
  "summary": string,
  "explanation": string[],
  "safety_note": string
}

Statement: "${statement}"

Sources:
${sources
  .map(
    (s, i) =>
      `SOURCE ${i + 1}\nTitle: ${s.title}\nURL: ${s.url}\nSnippet: ${s.snippet}`
  )
  .join("\n\n")}
`.trim();

    const resp = await model.generateContent(prompt);
    const raw = resp.response.text();

    let parsed: any;
    try {
      parsed = safeJsonParse(raw);
    } catch {
      // Return debug-friendly JSON instead of crashing
      return NextResponse.json(
        { error: "Gemini returned non-JSON", raw },
        { status: 500 }
      );
    }

    // Normalize output (avoid UI breaking)
    const verdict = parsed?.verdict ?? "Insufficient evidence";
    const confidence =
      typeof parsed?.confidence === "number" ? parsed.confidence : 0.5;
    const summary = typeof parsed?.summary === "string" ? parsed.summary : "";
    const explanation = Array.isArray(parsed?.explanation) ? parsed.explanation : [];
    const safety_note =
      typeof parsed?.safety_note === "string"
        ? parsed.safety_note
        : "Informational support only. Not medical advice. For emergencies, contact local emergency services.";

    return NextResponse.json({
      verdict,
      confidence,
      summary,
      explanation,
      sources,
      safety_note,
    });
  } catch (err: any) {
    console.error("MYTHBUSTER ERROR:", err);
    return NextResponse.json(
      { error: "Server error", message: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
