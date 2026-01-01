"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GlowOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer cosmic glow (BOOSTED) */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.55, 0.85, 0.55], // ✅ stronger range
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(91,155,213,0.55) 0%, rgba(123,104,238,0.45) 45%, rgba(0,0,0,0) 75%)",
        }}
      />

      {/* Middle nebula ring (BOOSTED) */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.65, 0.95, 0.65], // ✅ stronger range
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute inset-8 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(125,211,252,0.60) 0%, rgba(123,104,238,0.50) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Extra subtle “screen” glow layer (helps visibility on dark bg) */}
      <motion.div
        animate={{
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-4 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(125,211,252,0.18) 40%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Nova core (BRIGHTER + HEAVIER SHADOW) */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
        className="relative w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(255,255,255,1) 0%, rgba(125,211,252,0.95) 28%, rgba(91,155,213,0.92) 45%, rgba(123,104,238,0.80) 68%, rgba(10,14,26,0.95) 100%)",
          boxShadow:
            "0 0 95px rgba(125,211,252,0.65), 0 0 150px rgba(123,104,238,0.55), inset 0 0 75px rgba(125,211,252,0.28)",
          filter: "saturate(1.15) contrast(1.05)", // ✅ makes it pop
        }}
      >
        {/* Star highlight (brighter) */}
        <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-white/55 blur-md" />

        {/* Secondary glow spot (brighter) */}
        <motion.div
          animate={{ opacity: [0.45, 0.85, 0.45] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 right-12 w-10 h-10 rounded-full bg-purple-400/45 blur-sm"
        />
      </motion.div>

      {/* Rotating energy ring (slightly brighter dots) */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-1/2 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-blue-300 shadow-lg shadow-blue-300/70" />
        <div className="absolute bottom-0 left-1/2 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-purple-300 shadow-lg shadow-purple-300/70" />
        <div className="absolute left-0 top-1/2 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-white shadow-lg shadow-white/70" />
        <div className="absolute right-0 top-1/2 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-cyan-200 shadow-lg shadow-cyan-200/70" />
      </motion.div>
    </div>
  );
}
