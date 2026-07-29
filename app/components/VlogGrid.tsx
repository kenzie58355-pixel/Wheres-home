const episodes = [
{ thumb: "linear-gradient(160deg, #9fb8ac, #5c7a6f)", runtime: "06:42", category: "Training", title: "First sparring session in La Paz" },
{ thumb: "linear-gradient(160deg, #e8c39a, var(--terracotta))", runtime: "04:15", category: "Ginger", title: "Taking Ginger through customs" },
{ thumb: "linear-gradient(160deg, #d9cdb0, #8a7a58)", runtime: "08:03", category: "Culture", title: "Altitude training at 3,600 meters" },
{ thumb: "linear-gradient(160deg, var(--apricot), var(--terracotta-2))", runtime: "05:27", category: "Discipline", title: "The 5am routine that changed everything" },
{ thumb: "linear-gradient(160deg, #7c9c96, var(--teal-2))", runtime: "07:11", category: "Food", title: "Street food only, for 72 hours" },
{ thumb: "linear-gradient(160deg, #cbb896, #8a6a4a)", runtime: "03:58", category: "Travel", title: "Packing a life into two bags" },
];

export default function VlogGrid() {
return (
<section style={{ padding: "110px 32px", background: "var(--paper)" }}>
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
<span
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.75rem",
opacity: 0.6,
textTransform: "uppercase",
letterSpacing: "0.08em",
}}
>
Latest episodes →
</span>
</div>

<div
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
gap: "28px",
}}
>
{episodes.map((ep, i) => (
<div
key={i}
style={{
background: "var(--paper-2)",
borderRadius: "18px",
overflow: "hidden",
cursor: "pointer",
}}
>
<div
style={{
height: "200px",
background: ep.thumb,
display: "flex",
alignItems: "center",
justifyContent: "center",
}}
>
<span
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.65rem",
opacity: 0.75,
color: "var(--cream-text)",
}}
>
Watch — {ep.runtime}
</span>
</div>
<div style={{ padding: "22px" }}>
<span
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.65rem",
color: "var(--terracotta)",
textTransform: "uppercase",
letterSpacing: "0.08em",
display: "block",
marginBottom: "10px",
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
}}
>
{ep.title}
</h3>
</div>
</div>
))}
</div>
</section>
);
}
