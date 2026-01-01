import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "NOVAInetwork — The AI-Integrated Blockchain",
  description: "The network that learns, protects, and evolves.",
};

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="
        no-underline
        rounded-2xl
        px-6 py-3
        text-base
        text-[#9CB0CC]
        hover:bg-[#101A33]
        hover:text-white
        transition
      "
    >
      {label}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            backdropFilter: "blur(14px)",
            background: "rgba(7, 11, 22, 0.5)",
            // ✅ removed the thin bar under the header:
            // borderBottom: "1px solid rgba(156, 176, 204, 0.08)",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "16px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
                fontWeight: 900,
                letterSpacing: "-0.02em",
              }}
            >
              <img
                src="/logo.png"
                alt="NOVAInetwork"
                style={{ width: 40, height: 40 }}
              />

              {/* Brand: match homepage “single gradient” style + bigger */}
              <span
                style={{
                  fontSize: 20,
                  lineHeight: 1,
                  background: "linear-gradient(90deg, #4C6FFF, #7DD3FC)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                NOVAInetwork
              </span>
            </Link>

            <nav style={{ display: "flex", gap: 10 }}>
              <NavLink href="/" label="Home" />
              <NavLink href="/vision" label="Vision" />
              <NavLink href="/socials" label="Socials" />
              <NavLink href="/documents" label="Documents" />
            </nav>
          </div>
        </header>

        <main style={{ width: "100%" }}>{children}</main>
      </body>
    </html>
  );
}
