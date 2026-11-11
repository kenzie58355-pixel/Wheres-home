import Link from "next/link";
import { journey } from "../data/journey";

export default function Hero() {
const arrived = new Date(journey.current.arrived).toLocaleDateString("en-US", { month: "short", day: "numeric" });

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
{journey.current.flag} Currently in {journey.current.city}, since {arrived}
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

<p style={{ marginTop: "26px", maxWidth: "580px", fontSize: "1.15rem", lineHeight: 1.6, fontWeight: 500 }}>
Former collegiate wrestler and national qualifier, traveling the world with my standard poodle, Ginger, and building businesses from the road.
</p>
<p style={{ marginTop: "12px", maxWidth: "560px", fontSize: "1.02rem", lineHeight: 1.6, opacity: 0.8 }}>
Based in {journey.current.city}, {journey.current.country}. I help people and their dogs move abroad without the chaos, with pet relocation help, custom itineraries, and real content from the road.
</p>

<div style={{ display: "flex", gap: "16px", marginTop: "40px", flexWrap: "wrap" }}>
<Link
href="/work-with-us"
style={{
background: "var(--ink)",
color: "var(--paper)",
padding: "16px 30px",
borderRadius: "100px",
fontWeight: 600,
fontSize: "0.95rem",
cursor: "pointer",
textDecoration: "none",
}}
>
Work with me
</Link>
<Link
href="/vlog"
style={{
border: "1.5px solid var(--ink)",
color: "var(--ink)",
padding: "16px 30px",
borderRadius: "100px",
fontWeight: 600,
fontSize: "0.95rem",
cursor: "pointer",
textDecoration: "none",
}}
>
Watch the latest episode
</Link>
<Link
href="/pawpass"
style={{
border: "1.5px solid var(--ink)",
color: "var(--ink)",
padding: "16px 30px",
borderRadius: "100px",
fontWeight: 600,
fontSize: "0.95rem",
cursor: "pointer",
textDecoration: "none",
}}
>
Explore PawPass
</Link>
</div>
<Link href="/ecuador-dog-checklist" style={{ marginTop: "22px", fontFamily: "'Space Mono', monospace", fontSize: "0.78rem", color: "var(--terracotta)", fontWeight: 700, textDecoration: "none", width: "fit-content" }}>
Free: how to leave Ecuador with your dog, the checklist {"\u2192"}
</Link>
</section>
);
}
