export default function VisionPage() {
  return (
    <div style={{ paddingTop: 24 }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            gap: 8,
            alignItems: "center",
            padding: "8px 14px",
            borderRadius: 999,
            border: "1px solid rgba(156,176,204,0.14)",
            background: "rgba(16,26,51,0.35)",
            color: "#9CB0CC",
            fontSize: 13,
          }}
        >
          Our Vision
        </div>

        <h1 style={{ fontSize: 54, marginTop: 18, marginBottom: 10 }}>
          The Vision of <span style={{ color: "#4C6FFF" }}>NOVAInetwork</span>
        </h1>

        <p style={{ color: "#9CB0CC", fontSize: 18, maxWidth: 760, margin: "0 auto" }}>
          Laying the groundwork for an intelligent blockchain that adapts and evolves.
        </p>
      </div>

      <div
        style={{
          marginTop: 40,
          padding: 28,
          borderRadius: 24,
          border: "1px solid rgba(156,176,204,0.14)",
          background: "rgba(16,26,51,0.45)",
          boxShadow: "0 0 0 1px rgba(156,176,204,0.10), 0 20px 60px rgba(0,0,0,0.45)",
        }}
      >
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Vision Statement</h2>

        <p style={{ color: "#9CB0CC", lineHeight: 1.8 }}>
          NOVAInetwork is building toward a mainstream, AI-integrated Layer-1 blockchain. Designed for
          real-world scale, high performance, and a developer-first experience. The goal is long-term,
          mainstream utility across dApps, infrastructure, and real-world systems.
        </p>

        <p style={{ color: "#9CB0CC", marginTop: 18 }}>NOVAInetwork is being designed to be:</p>

        <ul style={{ color: "#9CB0CC", marginTop: 12, lineHeight: 1.9 }}>
          <li>
            <span style={{ color: "#EAF2FF" }}>Self-improving</span> — adapting to congestion,
            inefficiencies, and new attack vectors
          </li>
          <li>
            <span style={{ color: "#EAF2FF" }}>AI-assisted security</span> — monitoring the network in
            real time to detect abnormal behavior and risks
          </li>
          <li>
            <span style={{ color: "#EAF2FF" }}>Post-quantum ready</span> — building a credible transition
            path as cryptographic standards evolve
          </li>
          <li>
            <span style={{ color: "#EAF2FF" }}>Ultra-scalable</span> — enabling fast, predictable,
            low-cost transactions
          </li>
          <li>
            <span style={{ color: "#EAF2FF" }}>Developer-friendly</span> — supporting modern dApps, token
            launches, and ecosystems
          </li>
        </ul>
      </div>
    </div>
  );
}
