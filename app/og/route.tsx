import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { profile } from "app/data/profile";

export const contentType = "image/png";

export function GET(request: NextRequest) {
  const requestedTitle = request.nextUrl.searchParams.get("title")?.trim();
  const title = (requestedTitle || profile.name).slice(0, 100);

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#172033",
        color: "#ffffff",
        padding: "72px",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "88px",
          height: "10px",
          background: "#62b49f",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            maxWidth: "1050px",
            fontSize: title.length > 55 ? "54px" : "68px",
            lineHeight: 1.08,
            fontWeight: 700,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            color: "#c7d8e8",
            fontSize: "28px",
          }}
        >
          {profile.role}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          color: "#8bc6ee",
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        Portfolio personale
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
