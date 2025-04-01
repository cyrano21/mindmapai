"use client";

import Link from "next/link";
import SchemaMentalSVG from "@/components/SchemaMentalSVG";

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-black text-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">🧭 Schéma Mental</h1>
        <p className="text-gray-300">
          Voici une représentation symbolique de ton organisation mentale, basée
          sur les données de ton profil psychologique.
        </p>

        <div className="grid gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">🧠 Centre de Gouvernance</h2>
            <p className="text-sm text-gray-400">
              Discipline mentale, structure interne, orientation stratégique. Tu
              as une forte capacité à aligner pensée et action.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">🌌 Intuition Symbolique</h2>
            <p className="text-sm text-gray-400">
              Connexion aux archétypes, décodage des symboles, vision
              métaphysique. Tu détectes naturellement les motifs invisibles.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">💾 Mémoire Active</h2>
            <p className="text-sm text-gray-400">
              Capacité à maintenir, manipuler et structurer les idées complexes
              à court terme. Tu combines analyse et intuition.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">🔮 Métacognition</h2>
            <p className="text-sm text-gray-400">
              Réflexion sur ta propre pensée, auto-analyse constante,
              ajustements conscients de ton raisonnement.
            </p>
          </div>

          <SchemaMentalSVG />
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
