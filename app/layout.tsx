import React from "react";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "MindMapAI",
  description: "Espace d'analyse psychologique interactive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <ThemeProvider>
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
