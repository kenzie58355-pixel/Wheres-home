export default function Hero() {
return (
<section
style={{
minHeight: "100svh",
display: "flex",
flexDirection: "column",
justifyContent: "center",
padding: "140px 32px 80px",
background:
"radial-gradient(ellipse at 20% 10%, rgba(232,162,93,0.35), transparent 55%), radial-gradient(ellipse at 85% 85%, rgba(30,74,71,0.18), transparent 50%), var(--paper)",
}}
>
<span
style={{
display: "inline-flex",
alignItems: "center",
gap: "10px",
border: "1.5px solid var(--stamp-red)",
color: "var(--stamp-red)",
padding: "6px 16px",
borderRadius: "100px",
fontFamily: "'Space Mono', monospace",
fontSize: "0.7rem",
textTransform: "uppercase",
letterSpacing: "0.08em",
width: "fit-content",
transform: "rotate(-2deg)",
marginBottom: "28px",
}}
>
Departure · La Paz · Aug 22
</span>

<h1
style={{
fontFamily: "'Fraunces', serif",
fontSize: "clamp(2.6rem, 7vw, 5.6rem)",
fontWeight: 600,
lineHeight: 0.98,
letterSpacing: "-0.01em",
maxWidth: "900px",
}}
>
Discipline is the{" "}
<em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--terracotta)" }}>
passport.
</em>
</h1>

<p style={{ marginTop: "26px", maxWidth: "520px", fontSize: "1.05rem", lineHeight: 1.6, opacity: 0.8 }}>
Training through La Paz, Colombia, Brazil, and beyond — with Ginger riding shotgun.
Follow the journey, then bring your own dog along with PawPass.
</p>

<div style={{ display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap" }}>
<div
style={{
background: "var(--ink)",
color: "var(--paper)",
padding: "16px 30px",
borderRadius: "100px",
fontWeight: 600,
fontSize: "0.95rem",
cursor: "pointer",
}}
>
Watch the latest episode
</div>
<div
style={{
border: "1.5px solid var(--ink)",
color: "var(--ink)",
padding: "16px 30px",
borderRadius: "100px",
fontWeight: 600,
fontSize: "0.95rem",
cursor: "pointer",
}}
>
Explore PawPass
</div>
</div>
</section>
);
}