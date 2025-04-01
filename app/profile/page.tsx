"use client";

import React, { useState, useEffect } from "react";
import { profileApi } from "../api";
import Link from "next/link";

export default function Page() {
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const data = await profileApi.getProfile();
        setProfileData(data);
        setError(null);
      } catch (err) {
        console.error("Erreur :", err);
        setError("Impossible de charger les données du profil.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <main className="min-h-screen p-6 text-white bg-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">🧠 Profil Cognitif</h1>
        <p className="mb-6">Analyse basée sur WISC-II.</p>

        {loading && <p className="text-blue-400">Chargement des données...</p>}

        {error && (
          <div className="bg-red-900 bg-opacity-50 p-4 rounded-md mb-6">
            <p className="text-red-200">{error}</p>
          </div>
        )}

        {profileData && (
          <div className="space-y-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">
                🧾 Informations générales
              </h2>
              <p>
                👤 <strong>Nom :</strong> {profileData.name}
              </p>
              <p>
                🎂 <strong>Âge :</strong> {profileData.age}
              </p>
              <p>
                🧠 <strong>QI Global :</strong>{" "}
                {profileData.cognitiveProfile.fullScaleIQ}
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">🧩 Axes cognitifs</h2>
              <ul className="list-disc ml-6">
                <li>
                  Compréhension verbale :{" "}
                  {profileData.cognitiveProfile.verbalComprehension}
                </li>
                <li>
                  Raisonnement perceptif :{" "}
                  {profileData.cognitiveProfile.perceptualReasoning}
                </li>
                <li>
                  Mémoire de travail :{" "}
                  {profileData.cognitiveProfile.workingMemory}
                </li>
                <li>
                  Vitesse de traitement :{" "}
                  {profileData.cognitiveProfile.processingSpeed}
                </li>
              </ul>
            </div>

            <div className="bg-green-900 bg-opacity-30 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-green-300">
                💪 Forces
              </h2>
              <ul className="list-disc ml-6">
                {profileData.strengths.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-900 bg-opacity-30 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-yellow-300">
                ⚠️ Points à améliorer
              </h2>
              <ul className="list-disc ml-6">
                {profileData.areasForImprovement.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>

            <div className="bg-blue-900 bg-opacity-30 p-4 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-300">
                📝 Recommandations
              </h2>
              <ul className="list-disc ml-6">
                {profileData.recommendations.map(
                  (item: string, index: number) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        )}

        <div className="mt-8">
          <Link href="/" className="text-blue-400 hover:underline">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
