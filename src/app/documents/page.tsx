import { ExternalLink, FileText } from "lucide-react";

const CardStyle: React.CSSProperties = {
  padding: 22,
  borderRadius: 20,
  border: "1px solid rgba(156,176,204,0.14)",
  background: "rgba(16,26,51,0.45)",
  color: "#EAF2FF",
  textDecoration: "none",
};

export default function DocumentsPage() {
  const litepaperHref =
    "https://www.dropbox.com/preview/NOVAInetwork%20final%20draft_posted%20version.pdf?context=content_suggestions&role=personal";

  return (
    <div style={{ paddingTop: 24 }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 14px",
            borderRadius: 999,
            border: "1px solid rgba(156,176,204,0.14)",
            background: "rgba(16,26,51,0.35)",
            color: "#9CB0CC",
            marginBottom: 18,
            fontSize: 14,
          }}
        >
          <FileText size={16} />
          NOVAInetwork Documents
        </div>

        <h1 style={{ fontSize: 52, marginBottom: 12 }}>
          Foundational Vision &{" "}
          <span style={{ color: "#4C6FFF" }}>Architecture</span>
        </h1>

        <p style={{ color: "#9CB0CC", fontSize: 18, maxWidth: 820, margin: "0 auto" }}>
          Explore the foundational vision and architecture behind NOVAInetwork. Discover how
          AI-integration transforms blockchain infrastructure.
        </p>

        <div style={{ marginTop: 26 }}>
          <a
            href={litepaperHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 22px",
              borderRadius: 999,
              background: "#4C6FFF",
              color: "#070B16",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            View Litepaper V1 <ExternalLink size={18} />
          </a>

          <div style={{ color: "rgba(156,176,204,0.55)", marginTop: 10, fontSize: 13 }}>
            Published 22nd Dec 2025
          </div>
        </div>
      </div>

      {/* Archive */}
      <div style={{ marginTop: 56, textAlign: "center" }}>
        <h2 style={{ fontSize: 38, marginBottom: 8 }}>
          Document <span style={{ color: "#4C6FFF" }}>Archive</span>
        </h2>
        <p style={{ color: "#9CB0CC", marginBottom: 24 }}>
          Access all official NOVAInetwork documentation
        </p>

        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={CardStyle}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(76,111,255,0.18)",
                    border: "1px solid rgba(156,176,204,0.14)",
                  }}
                >
                  <FileText size={22} />
                </div>

                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 800, fontSize: 18 }}>Litepaper V1</div>
                  <div style={{ color: "#9CB0CC", marginTop: 4 }}>
                    Foundational vision and architecture behind NOVAInetwork
                  </div>
                  <div style={{ color: "rgba(156,176,204,0.55)", marginTop: 6, fontSize: 13 }}>
                    Published 22nd Dec 2025
                  </div>
                </div>
              </div>

              <a
                href={litepaperHref}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "12px 18px",
                  borderRadius: 999,
                  background: "#4C6FFF",
                  color: "#070B16",
                  textDecoration: "none",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                View Document <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div style={{ marginTop: 36, textAlign: "center" }}>
            <h3 style={{ fontSize: 28, marginBottom: 10 }}>Want to Learn More?</h3>
            <p style={{ color: "#9CB0CC", marginBottom: 18 }}>
              Explore our vision page for detailed insights into the future of NOVAInetwork
            </p>
            <a
              href="/vision"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 22px",
                borderRadius: 999,
                border: "1px solid rgba(156,176,204,0.14)",
                background: "rgba(16,26,51,0.35)",
                color: "#EAF2FF",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Read Our Vision <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
