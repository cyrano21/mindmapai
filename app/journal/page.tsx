"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
type JournalEntry = {
  date: string;
  text: string;
  emotion?: string;
  keywords?: string[];
  clarity?: string;
};


export default function Page() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [filterDate, setFilterDate] = useState("");
  const exportRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("journalEntries");
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  const saveEntry = async () => {
    if (!entry.trim()) return;

    const today = new Date().toISOString().split("T")[0];

    // Analyse via Hugging Face
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: entry }),
    });

    const analysis = await res.json();

    const newEntry: JournalEntry = {
      date: today,
      text: entry,
      emotion: analysis.emotion || "Inconnue",
      keywords: analysis.keywords || [],
      clarity: analysis.clarity || "N/A",
    };

    const updatedEntries = [newEntry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem("journalEntries", JSON.stringify(updatedEntries));
    setEntry("");
  };

  const filtered = filterDate
    ? entries.filter((e) => e.date === filterDate)
    : entries;

    const exportToPDF = async () => {
      if (filtered.length === 0) return;
    
      const html2pdf = (await import("html2pdf.js")).default;
    
      const element = exportRef.current;
      const options = {
        filename: `journal_${filterDate || "complet"}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
    
      html2pdf().from(element).set(options).save();
    };

  return (
    <main className="min-h-screen p-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📘 Journal de Suivi Mental</h1>

        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Décris ton état mental aujourd'hui..."
          className="w-full h-40 p-4 mb-4 bg-gray-900 border border-gray-700 rounded text-white"
        />

        <button
          type="button"
          onClick={saveEntry}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white mr-2"
        >
          Sauvegarder
        </button>

        <div className="mt-8 mb-4">
          <label
            htmlFor="dateFilter"
            className="block mb-1 text-sm text-gray-300"
          >
            📅 Filtrer par date :
          </label>
          <input
            id="dateFilter"
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="bg-gray-800 border border-gray-600 rounded p-2 text-white"
          />
        </div>

        {filtered.length > 0 && (
          <button
            type="button"
            onClick={exportToPDF}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white mb-6"
          >
            📤 Exporter en PDF
          </button>
        )}

        <div ref={exportRef}>
          <h2 className="text-xl font-semibold mb-4">
            🕒 Entrées {filterDate && `du ${filterDate}`}
          </h2>
          {filtered.length === 0 ? (
            <p className="text-gray-400">Aucune entrée à cette date.</p>
          ) : (
            <ul className="space-y-4">
              {filtered.map((e, i) => (
                <li key={i} className="bg-gray-800 p-4 rounded">
                  <p className="text-sm text-gray-400 mb-2">📅 {e.date}</p>
                  <p className="mb-2">{e.text}</p>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p>
                      🧠 <strong>Émotion :</strong> {e.emotion}
                    </p>
                    <p>
                      🏷 <strong>Mots-clés :</strong>{" "}
                      {e.keywords?.join(", ") || "N/A"}
                    </p>
                    <p>
                      📈 <strong>Clarté :</strong> {e.clarity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="text-blue-400 hover:underline text-sm inline-block"
          >
            ← Retour à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
