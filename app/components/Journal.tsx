const entries = [
{
postmark: "LA PAZ BOL.",
dateline: "La Paz, Bolivia — Aug 24, 2026",
title: "Altitude, ego, and the first sparring round",
drop: "A",
body: "t 3,600 meters, everything you thought you knew about your own conditioning gets rewritten in the first ninety seconds. This is the entry where I admit that.",
},
{
postmark: "GINGER LOG",
dateline: "Departure — Aug 18, 2026",
title: "What it actually takes to fly with a standard poodle",
drop: "T",
body: "he paperwork, the vet visits, the 4am crate training — a full accounting of what nobody tells you before your dog becomes your travel partner.",
},
{
postmark: "FIELD NOTES",
dateline: "Somewhere in transit — Aug 20, 2026",
title: "Why I stopped waiting for the \"right time\"",
drop: "E",
body: "very plan I made had a reason to wait one more season. This is the entry about the season I stopped listening to that reason.",
},
];

export default function Journal() {
return (
<section
style={{
padding: "100px 32px 120px",
background: "var(--paper-2)",
borderTop: "1px solid rgba(43,36,32,0.12)",
borderBottom: "1px solid rgba(43,36,32,0.12)",
}}
>
<div style={{ maxWidth: "560px", marginBottom: "56px" }}>
<span
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.7rem",
textTransform: "uppercase",
letterSpacing: "0.08em",
color: "var(--stamp-red)",
display: "block",
marginBottom: "10px",
}}
>
The Journal
</span>
<h2
style={{
fontFamily: "'Fraunces', serif",
fontSize: "clamp(1.9rem, 4vw, 2.6rem)",
fontWeight: 600,
}}
>
Some things deserve more than a caption.
</h2>
<p style={{ marginTop: "14px", fontSize: "1rem", lineHeight: 1.65, opacity: 0.75 }}>
Longer dispatches from the road — the stuff that doesn't fit in 60 seconds.
</p>
</div>

<div
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
gap: "32px",
}}
>
{entries.map((entry, i) => (
<article
key={i}
style={{
position: "relative",
background: "var(--paper)",
border: "1px solid rgba(43,36,32,0.15)",
borderRadius: "4px",
padding: "34px 30px 30px",
}}
>
<div
style={{
position: "absolute",
top: "-16px",
right: "20px",
width: "58px",
height: "58px",
borderRadius: "50%",
border: "1.5px dashed var(--teal)",
display: "flex",
alignItems: "center",
justifyContent: "center",
textAlign: "center",
fontFamily: "'Space Mono', monospace",
fontSize: "0.5rem",
color: "var(--teal)",
lineHeight: 1.3,
transform: "rotate(9deg)",
background: "var(--paper)",
}}
>
{entry.postmark}
</div>
<span
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.68rem",
color: "var(--stamp-red)",
display: "block",
marginBottom: "18px",
}}
>
{entry.dateline}
</span>
<h3
style={{
fontFamily: "'Fraunces', serif",
fontSize: "1.4rem",
fontWeight: 600,
lineHeight: 1.2,
marginBottom: "16px",
}}
>
{entry.title}
</h3>
<p style={{ fontSize: "0.92rem", lineHeight: 1.7, opacity: 0.85 }}>
<span
style={{
float: "left",
fontFamily: "'Fraunces', serif",
fontSize: "2.8rem",
lineHeight: 0.8,
fontWeight: 600,
padding: "6px 8px 0 0",
color: "var(--terracotta)",
}}
>
{entry.drop}
</span>
{entry.body}
</p>
<div
style={{
display: "inline-block",
marginTop: "18px",
fontFamily: "'Space Mono', monospace",
fontSize: "0.7rem",
borderBottom: "1px solid var(--ink)",
paddingBottom: "2px",
cursor: "pointer",
}}
>
Read the full entry →
</div>
</article>
))}
</div>
</section>
);
}