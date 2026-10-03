import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Emmanuel Doji";
  const subtitle =
    searchParams.get("subtitle") ??
    "Engineer · Operator · Educator — Fonio Labs · Tita Group · Firm Foundation & Dominion Academy";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#fafaf7",
          padding: "72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: "monospace",
            color: "#6b6b66",
          }}
        >
          <span>Emmanuel Doji · 2026</span>
          <span>emmanueldoji.xyz</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 0.95,
              letterSpacing: -2,
              color: "#0a0a0a",
              fontStyle: "italic",
              maxWidth: "85%",
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 28, color: "#6b6b66", maxWidth: "75%" }}>{subtitle}</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            color: "#0a0a0a",
            fontFamily: "monospace",
            borderTop: "1px solid #d9d9d3",
            paddingTop: 24,
          }}
        >
          <span>Jos, NG · WAT</span>
          <span>github.com/dev-doji</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
