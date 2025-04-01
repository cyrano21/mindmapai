"use client";

import React from "react";

export default function SchemaMentalSVG() {
  return (
    <div className="w-full flex justify-center py-10">
      <svg
        width="320"
        height="320"
        viewBox="0 0 320 320"
        className="font-sans text-sm"
      >
        <circle
          cx="160"
          cy="160"
          r="120"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />

        {/* Intuition */}
        <text
          x="160"
          y="30"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#22d3ee"
        >
          🖌️ Intuition
        </text>

        {/* Gouvernance */}
        <text
          x="40"
          y="165"
          dy="5"
          textAnchor="start"
          fill="#facc15"
          fontSize="14"
        >
          🧠 Gouvernance
        </text>

        {/* Métacognition */}
        <text
          x="280"
          y="165"
          dy="5"
          textAnchor="end"
          fill="#f472b6"
          fontSize="14"
        >
          🧠 Métacognition
        </text>

        {/* Mémoire */}
        <text
          x="160"
          y="305"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#22c55e"
        >
          💾 Mémoire
        </text>

        {/* Lignes */}
        <line
          x1="160"
          y1="40"
          x2="160"
          y2="100"
          stroke="#22d3ee"
          strokeWidth="1.5"
        />
        <line
          x1="160"
          y1="280"
          x2="160"
          y2="220"
          stroke="#22c55e"
          strokeWidth="1.5"
        />
        <line
          x1="40"
          y1="160"
          x2="100"
          y2="160"
          stroke="#facc15"
          strokeWidth="1.5"
        />
        <line
          x1="280"
          y1="160"
          x2="220"
          y2="160"
          stroke="#f472b6"
          strokeWidth="1.5"
        />

        {/* Centre */}
        <circle cx="160" cy="160" r="4" fill="white" />
      </svg>
    </div>
  );
}
