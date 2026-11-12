import { ImageResponse } from "next/og";

export const alt = "Where's Home? Traveling and moving abroad with a dog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 80px",
          background: "linear-gradient(135deg, #F7F2E7 0%, #F3E2C7 55%, #E8A25D 100%)",
          color: "#2B2420",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              border: "3px solid #9C2A2E",
              color: "#9C2A2E",
              borderRadius: "100px",
              padding: "10px 26px",
              fontSize: 26,
              letterSpacing: 3,
            }}
          >
            HOME BASE: CALI, COLOMBIA
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>wheres-home.vercel.app</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, lineHeight: 1 }}>Where&apos;s Home?</div>
          <div style={{ display: "flex", fontSize: 36, marginTop: 20, maxWidth: 1000, lineHeight: 1.25 }}>
            Traveling the world with my poodle, Ginger. Moving abroad with your dog? I can help.
          </div>
        </div>

        <div style={{ display: "flex", gap: 18 }}>
          <div style={{ display: "flex", background: "#1E4A47", color: "#F7F2E7", borderRadius: "100px", padding: "14px 30px", fontSize: 28 }}>Pet relocation help</div>
          <div style={{ display: "flex", background: "#B5522E", color: "#F7F2E7", borderRadius: "100px", padding: "14px 30px", fontSize: 28 }}>Dog-friendly itineraries</div>
          <div style={{ display: "flex", background: "#2B2420", color: "#F7F2E7", borderRadius: "100px", padding: "14px 30px", fontSize: 28 }}>Free guides</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
