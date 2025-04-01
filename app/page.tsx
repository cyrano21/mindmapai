import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-6 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black transition-colors">
      <div className="max-w-6xl mx-auto">
        <section className="text-center py-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            🧠{" "}
            <span className="text-primary-600 dark:text-primary-400">
              MindMapAI
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Bienvenue dans ton espace d'analyse psychologique interactive.
            Découvre, comprends et améliore ton bien-être mental.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link
            href="/profile"
            className="card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-6">
              <div className="text-3xl mb-4 text-primary-600 dark:text-primary-400">
                👤
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Profil Cognitif
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Explore ton profil psychologique basé sur le WISC-II et découvre
                tes forces cognitives.
              </p>
            </div>
          </Link>

          <Link
            href="/tests"
            className="card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-6">
              <div className="text-3xl mb-4 text-secondary-600 dark:text-secondary-400">
                📊
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Tests de Personnalité
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Passe des tests reconnus (MBTI, Big Five, Ennéagramme) et
                comprends mieux ta personnalité.
              </p>
            </div>
          </Link>

          <Link
            href="/schema"
            className="card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-6">
              <div className="text-3xl mb-4 text-green-600 dark:text-green-400">
                🔄
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Schéma Mental Interactif
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Visualise les connexions entre tes pensées, émotions et
                comportements.
              </p>
            </div>
          </Link>

          <Link
            href="/journal"
            className="card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-6">
              <div className="text-3xl mb-4 text-blue-600 dark:text-blue-400">
                📔
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Journal de Suivi
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Note tes pensées quotidiennes et observe l'évolution de ton état
                mental au fil du temps.
              </p>
            </div>
          </Link>

          <Link
            href="/export"
            className="card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="p-6">
              <div className="text-3xl mb-4 text-purple-600 dark:text-purple-400">
                📤
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Export de Données
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Exporte tes données en format PDF ou JSON pour les conserver ou
                les partager.
              </p>
            </div>
          </Link>

          <div className="card hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-primary-50 dark:bg-primary-900/20">
            <div className="p-6">
              <div className="text-3xl mb-4 text-primary-600 dark:text-primary-400">
                🆕
              </div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Nouveautés
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Interface modernisée, mode sombre/clair, et plus d'options pour
                personnaliser ton expérience.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-primary-50 dark:bg-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Pourquoi utiliser MindMapAI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl mb-2 text-primary-600 dark:text-primary-400">
                🔒
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Confidentialité
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Tes données restent privées et sécurisées.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl mb-2 text-primary-600 dark:text-primary-400">
                📈
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Suivi Personnalisé
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Analyse ton évolution mentale au fil du temps.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl mb-2 text-primary-600 dark:text-primary-400">
                🧪
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                Tests Scientifiques
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Basé sur des méthodes psychologiques reconnues.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
