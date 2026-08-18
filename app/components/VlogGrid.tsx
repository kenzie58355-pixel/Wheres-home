import Link from "next/link";
import { episodes } from "../vlog/data";

export default function VlogGrid() {
const now = new Date();

return (
<section id="vlog" style={{ padding: "110px 32px", background: "var(--paper)" }}>
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "flex-end",
marginBottom: "56px",
flexWrap: "wrap",
gap: "20px",
}}
>
<h2
style={{
fontFamily: "'Fraunces', serif",
fontSize: "clamp(2rem, 4vw, 2.8rem)",
fontWeight: 600,
}}
>
From the road.
</h2>
<Link
href="/vlog"
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.75rem",
opacity: 0.6,
textTransform: "uppercase",
letterSpacing: "0.08em",
color: "inherit",
textDecoration: "none",
}}
>
See all episodes →
</Link>
</div>

<div
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
gap: "28px",
}}
>
{episodes.map((ep, i) => {
const drop = new Date(ep.dropDate);
const daysLeft = Math.ceil((drop.getTime() - now.getTime()) / 86400000);
const isLive = daysLeft <= 0;
const dropLabel = drop.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

return (
<Link key={i} href={"/vlog/" + ep.slug} style={{ textDecoration: "none", color: "inherit" }}>
<div
style={{
background: "var(--paper-2)",
borderRadius: "18px",
overflow: "hidden",
opacity: isLive ? 1 : 0.75,
border: isLive ? "none" : "1px dashed rgba(43,36,32,0.15)",
cursor: "pointer",
}}
>
<div
style={{
height: "200px",
background: ep.thumb,
display: "flex",
flexDirection: "column",
alignItems: "center",
justifyContent: "center",
gap: "6px",
}}
>
<span
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.62rem",
opacity: 0.9,
color: "var(--cream-text)",
textTransform: "uppercase",
letterSpacing: "0.06em",
}}
>
Drop date, {dropLabel}
</span>
<span
style={{
fontFamily: "'Fraunces', serif",
fontSize: "1.1rem",
fontWeight: 600,
color: "var(--cream-text)",
}}
>
{isLive ? "Live now" : `Drops in ${daysLeft} ${daysLeft === 1 ? "day" : "days"}`}
</span>
</div>
<div style={{ padding: "22px" }}>
<span
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.65rem",
color: "var(--terracotta)",
marginBottom: "10px",
display: "block",
}}
>
{ep.category}
</span>
<h3
style={{
fontFamily: "'Fraunces', serif",
fontWeight: 600,
fontSize: "1.15rem",
lineHeight: 1.3,
filter: isLive ? "none" : "blur(1.5px)",
}}
>
{ep.title}
</h3>
</div>
</div>
</Link>
);
})}
</div>
</section>
);
}
