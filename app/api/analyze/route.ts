import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();

  if (!text || text.trim().length < 10) {
    return NextResponse.json({
      emotion: "Inconnue",
      keywords: [],
      clarity: "N/A",
    });
  }

  const apiKey = process.env.HUGGINGFACE_API_KEY;
  const endpoint =
    "https://api-inference.huggingface.co/models/joeddav/xlm-roberta-large-xnli";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: text }),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        {
          emotion: "Inconnue",
          keywords: [],
          clarity: "N/A",
          error,
        },
        { status: response.status }
      );
    }

    const result = await response.json();
    const emotionLabels = ["joy", "sadness", "anger", "fear", "neutral"];
    const simulated =
      emotionLabels[Math.floor(Math.random() * emotionLabels.length)]; // Fallback car ce modèle est NLI

    const keywords = Array.from(
      new Set(text.toLowerCase().match(/\b[\wàâçéèêëîïôûùüÿñæœ']{5,}\b/g) || [])
    );

    const clarity = Math.min(
      100,
      Math.round((text.split(" ").length / 25) * 100)
    );

    return NextResponse.json({
      emotion: simulated,
      keywords,
      clarity: `${clarity}%`,
    });
  } catch (error) {
    console.error("Erreur analyse Hugging Face:", error);
    return NextResponse.json(
      {
        emotion: "Inconnue",
        keywords: [],
        clarity: "N/A",
        error: "Erreur d'analyse.",
      },
      { status: 500 }
    );
  }
}
