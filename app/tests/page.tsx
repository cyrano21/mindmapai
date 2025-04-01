"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-black text-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">📊 Tests de Personnalité</h1>
        <p className="text-gray-300">
          Voici une estimation de ton profil psychologique selon trois grands
          modèles.
        </p>

        {/* MBTI */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            🧠 MBTI : <span className="text-green-400">INFJ-A</span>
          </h2>
          <p className="text-sm text-gray-400 mb-2">
            Le Conseiller visionnaire
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>
              <strong>Introversion :</strong> tu puises ton énergie en toi-même.
            </li>
            <li>
              <strong>Intuition :</strong> tu perçois les schémas profonds et
              symboliques.
            </li>
            <li>
              <strong>Feeling :</strong> tu agis selon tes valeurs internes.
            </li>
            <li>
              <strong>Jugement :</strong> tu préfères la structure et les
              décisions claires.
            </li>
          </ul>
        </div>

        {/* Big Five */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">🧬 Big Five</h2>
          <ul className="list-disc list-inside text-sm">
            <li>
              <strong>Ouverture :</strong> Très élevée – imagination,
              créativité, amour du savoir
            </li>
            <li>
              <strong>Conscience :</strong> Élevée – discipline, rigueur,
              fiabilité
            </li>
            <li>
              <strong>Extraversion :</strong> Faible – calme, réflexion,
              préférence pour la solitude
            </li>
            <li>
              <strong>Agréabilité :</strong> Haute – empathie, douceur,
              coopération
            </li>
            <li>
              <strong>Neuroticisme :</strong> Faible – stabilité émotionnelle et
              résilience
            </li>
          </ul>
        </div>

        {/* Ennéagramme */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            🧭 Ennéagramme : <span className="text-yellow-400">Type 5w4</span>
          </h2>
          <p className="text-sm text-gray-400 mb-2">
            L'Observateur introspectif et créatif
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>🧩 Recherche de compréhension profonde</li>
            <li>🎨 Sensibilité esthétique et émotionnelle</li>
            <li>🔒 Besoin d’espace personnel pour penser et créer</li>
          </ul>
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
