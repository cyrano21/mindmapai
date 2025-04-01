"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner transition-colors py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              MindMapAI
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Votre espace personnel d'analyse psychologique interactive et de
              suivi mental.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/profile"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Profil Cognitif
                </Link>
              </li>
              <li>
                <Link
                  href="/tests"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Tests Psychologiques
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Journal de Suivi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Ressources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {currentYear} MindMapAI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
