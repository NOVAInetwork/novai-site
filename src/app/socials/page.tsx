import { ExternalLink } from "lucide-react";

const ICON_BOX = 64; // Base44-ish icon square size
const ICON_RADIUS = 16;

type SocialCardProps = {
  href: string;
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  iconScale?: number; // <— this is the key
};

function SocialCard({
  href,
  title,
  description,
  iconSrc,
  iconAlt,
  iconScale = 1,
}: SocialCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: 22,
        borderRadius: 20,
        border: "1px solid rgba(156,176,204,0.14)",
        background: "rgba(16,26,51,0.45)",
        color: "#EAF2FF",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {/* ICON CLIP BOX (same for all) */}
        <div
          style={{
            width: ICON_BOX,
            height: ICON_BOX,
            borderRadius: ICON_RADIUS,
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {/* IMAGE (scaled INSIDE the box) */}
          <img
            src={iconSrc}
            alt={iconAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transform: `scale(${iconScale})`,
              transformOrigin: "center",
              display: "block",
            }}
          />
        </div>

        <div>
          <strong>{title}</strong>
          <div style={{ color: "#9CB0CC", marginTop: 6 }}>{description}</div>
        </div>
      </div>

      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 999,
          display: "grid",
          placeItems: "center",
          border: "1px solid rgba(156,176,204,0.14)",
          background: "rgba(16,26,51,0.35)",
          flexShrink: 0,
        }}
      >
        <ExternalLink size={18} />
      </div>
    </a>
  );
}

export default function SocialsPage() {
  return (
    <div style={{ paddingTop: 24 }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 52, marginBottom: 12 }}>
          Connect With <span style={{ color: "#4C6FFF" }}>NOVAInetwork</span>
        </h1>
        <p style={{ color: "#9CB0CC", fontSize: 18 }}>
          Join the community and stay up to date across platforms.
        </p>
      </div>

      <div
        style={{
          marginTop: 40,
          display: "grid",
          gap: 18,
          maxWidth: 760,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* X: no scaling */}
        <SocialCard
          href="https://x.com/NOVAInetwork"
          title="X (Twitter)"
          description="Updates, announcements, and progress in public."
          iconSrc="/icons/x.png"
          iconAlt="X"
          iconScale={1}
        />

        {/* Discord: scale UP to match Base44 */}
        <SocialCard
          href="https://discord.gg/KJsmzvpjnD"
          title="Discord"
          description="Main community hub — ideas, feedback, and discussions."
          iconSrc="/icons/discord.png"
          iconAlt="Discord"
          iconScale={1.7}
        />

        {/* Telegram: scale slightly UP */}
        <SocialCard
          href="https://t.me/+QoacVmowWNRkZjNk"
          title="Telegram"
          description="Get real-time updates and participate in discussions."
          iconSrc="/icons/telegram.png"
          iconAlt="Telegram"
          iconScale={1.3}
        />
      </div>
    </div>
  );
}
