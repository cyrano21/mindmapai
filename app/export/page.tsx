"use client";

import { useState } from "react";
import Link from "next/link";

export default function ExportPage() {
  const [status, setStatus] = useState("");

  const handleExport = async (type: "json" | "pdf") => {
    try {
      setStatus("Génération en cours...");

      const journal = JSON.parse(
        localStorage.getItem("journalEntries") || "[]"
      );
      const profile = await fetch("/api/profile").then((res) => res.json());
      const tests = await fetch("/api/tests").then((res) => res.json());

      const data = {
        profilPsychologique: profile,
        resultatsTests: tests,
        journalPersonnel: journal,
        date: new Date().toISOString(),
      };

      if (type === "json") {
        const blob = new Blob([JSON.stringify(data, null, 2)], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "profil_psychologique.json";
        link.click();
        setStatus("✅ Export JSON terminé.");
      }

      if (type === "pdf") {
        const content = `
          === PROFIL PSYCHOLOGIQUE ===\n${JSON.stringify(profile, null, 2)}\n\n
          === TESTS ===\n${JSON.stringify(tests, null, 2)}\n\n
          === JOURNAL ===\n${journal
            .map(
              (j: { date: string; text: string }) =>
                `📅 ${j.date}\n${j.text}\n---`
            )
            .join("\n")}
        `;
        const blob = new Blob([content], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "profil_psychologique.pdf";
        link.click();
        setStatus("✅ Export PDF terminé.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Une erreur est survenue.");
    }
  };

  return (
    <main className="min-h-screen p-6 bg-black text-white">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">📤 Export de ton Dossier Mental</h1>
        <p className="text-gray-300">
          Tu peux exporter l'intégralité de tes données sous forme de fichier.
        </p>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => handleExport("json")}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            📦 Exporter en JSON
          </button>

          <button
            type="button"
            onClick={() => handleExport("pdf")}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
          >
            🧾 Exporter en PDF
          </button>
        </div>

        {status && <p className="text-sm text-yellow-400">{status}</p>}

        <div className="mt-8">
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
