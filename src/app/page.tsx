"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";

import ParticleField from "../components/novai/ParticleField";
import GlowOrb from "../components/novai/GlowOrb";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <section
        style={{
          position: "relative",
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        {/* Dynamic background */}
        <ParticleField />
        <div
          className="galaxy-texture"
          style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        />

        {/* ✅ Tone down the top-left “blank spot” */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 2,
            background:
              "radial-gradient(900px circle at 0% 0%, rgba(7,11,22,0.75) 0%, rgba(7,11,22,0) 60%)",
          }}
        />

        {/* Nebula glows (these are the big soft circles) */}
        {/* ✅ Removed the top-left glow blob */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "18%",
            width: 520,
            height: 520,
            borderRadius: 9999,
            filter: "blur(70px)",
            background: "rgba(125, 211, 252, 0.14)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "28%",
            width: 420,
            height: 420,
            borderRadius: 9999,
            filter: "blur(50px)",
            background: "rgba(76, 111, 255, 0.10)",
            pointerEvents: "none",
          }}
        />

        {/* CONTENT WRAPPER (matches your other pages) */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1
                style={{
                  fontSize: 56,
                  lineHeight: 1.05,
                  fontWeight: 800,
                  marginBottom: 18,
                  letterSpacing: "-0.02em",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(90deg, #4C6FFF, #7DD3FC)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  NOVAInetwork
                </span>{" "}
                —{" "}
                <span style={{ color: "#FFFFFF" }}>
                  The AI-Integrated Blockchain.
                </span>
              </h1>

              <p style={{ fontSize: 22, color: "#D1D9E6", marginBottom: 18 }}>
                The network that learns, protects, and evolves.
              </p>

              <p
                style={{
                  fontSize: 20,
                  color: "#7DD3FC",
                  fontStyle: "italic",
                  marginBottom: 22,
                }}
              >
                “The intelligent network is awakening.”
              </p>

              <p
                style={{
                  fontSize: 16,
                  color: "#9CB0CC",
                  lineHeight: 1.7,
                  maxWidth: 720,
                  marginBottom: 26,
                }}
              >
                NOVAInetwork is a standalone, AI-native Layer-1 blockchain concept
                built to learn, protect, and evolve over time, with AI integrated
                directly into the protocol.
              </p>

              {/* BUTTONS */}
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Link
                  href="/documents"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 22px",
                    borderRadius: 9999,
                    background: "#4C6FFF",
                    color: "white",
                    fontWeight: 700,
                    textDecoration: "none",
                    boxShadow: "0 10px 24px rgba(76, 111, 255, 0.20)",
                  }}
                >
                  Read Litepaper <ArrowRight size={18} />
                </Link>

                <Link
                  href="/socials"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 22px",
                    borderRadius: 9999,
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "white",
                    fontWeight: 700,
                    textDecoration: "none",
                    background: "rgba(0,0,0,0.15)",
                  }}
                >
                  Join Community
                </Link>
              </div>

              <p style={{ marginTop: 18, color: "#7B8FAE", fontSize: 13 }}>
                Status: Ultra-early stage (Idea → Foundation). No mainnet, audits,
                or finalised specs yet.
              </p>
            </motion.div>

            {/* RIGHT ORB */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 420,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 28, // ✅ moved slightly up (was 40)
                  left: "60%", // ✅ moved more right (was 56%)
                  transform: "translateX(-50%)",
                  width: 420,
                  height: 420,
                  zIndex: 2,
                  pointerEvents: "none",
                  opacity: 0.75, // ✅ 75% opacity
                }}
              >
                {/* extra glow to make it “pop” more */}
                <div
                  style={{
                    position: "absolute",
                    inset: -22,
                    borderRadius: 9999,
                    filter: "blur(26px)",
                    background:
                      "radial-gradient(circle, rgba(125,211,252,0.22) 0%, rgba(76,111,255,0.18) 45%, transparent 75%)",
                    zIndex: 1,
                    opacity: 0.9, // ✅ glow opacity increased
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                  }}
                >
                  <GlowOrb className="w-full h-full" />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card"
                style={{
                  position: "absolute",
                  top: 110,
                  right: 10,
                  borderRadius: 14,
                  padding: "10px 14px",
                  zIndex: 3,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Shield size={18} color="#4ade80" />
                  <span
                    style={{ color: "white", fontSize: 13, fontWeight: 600 }}
                  >
                    AI Security
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="glass-card"
                style={{
                  position: "absolute",
                  bottom: 110,
                  left: 10,
                  borderRadius: 14,
                  padding: "10px 14px",
                  zIndex: 3,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Zap size={18} color="#22d3ee" />
                  <span
                    style={{ color: "white", fontSize: 13, fontWeight: 600 }}
                  >
                    Protocol Intelligence
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
