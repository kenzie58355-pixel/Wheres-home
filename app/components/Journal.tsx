import Link from "next/link";
import { entries } from "../journal/data";

export default function Journal() {
const now = new Date();
const visible = entries.filter((e) => !e.publishDate || new Date(e.publishDate) <= now);
const featured = visible.find((e) => e.featured) || visible[0];
const rest = visible.filter((e) => e.slug !== featured?.slug).slice(0, 2);

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
<h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.9rem,4vw,2.6rem)", fontWeight: 600 }}>
Some things deserve more than a caption.
</h2>
<p style={{ marginTop: "14px", fontSize: "1rem", lineHeight: 1.65, opacity: 0.75 }}>
Longer dispatches from the road, the stuff that doesn&apos;t fit in 60 seconds.
</p>
</div>

<div
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
gap: "32px",
}}
>
{featured && (
<Link href={"/journal/" + featured.slug} style={{ textDecoration: "none", color: "inherit" }}>
<article
style={{
position: "relative",
background: "var(--paper)",
border: "1px solid rgba(43,36,32,0.15)",
borderRadius: "4px",
padding: "34px 30px 30px",
cursor: "pointer",
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
{featured.postmark}
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
{featured.dateline}, {featured.date}
</span>
<h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 600, lineHeight: 1.2, marginBottom: "16px" }}>
{featured.title}
</h3>
<p style={{ fontSize: "0.92rem", lineHeight: 1.7, opacity: 0.85 }}>{featured.excerpt}</p>
<div
style={{
display: "inline-block",
marginTop: "18px",
fontFamily: "'Space Mono', monospace",
fontSize: "0.7rem",
borderBottom: "1px solid var(--ink)",
paddingBottom: "2px",
}}
>
Read the full entry →
</div>
</article>
</Link>
)}

{rest.map((entry, i) => (
<Link key={i} href={"/journal/" + entry.slug} style={{ textDecoration: "none", color: "inherit" }}>
<article
style={{
position: "relative",
background: "var(--paper)",
border: "1px solid rgba(43,36,32,0.15)",
borderRadius: "4px",
padding: "34px 30px 30px",
cursor: "pointer",
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
{entry.dateline}, {entry.date}
</span>
<h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.4rem", fontWeight: 600, lineHeight: 1.2, marginBottom: "16px" }}>
{entry.title}
</h3>
<p style={{ fontSize: "0.92rem", lineHeight: 1.7, opacity: 0.85 }}>{entry.excerpt}</p>
<div
style={{
display: "inline-block",
marginTop: "18px",
fontFamily: "'Space Mono', monospace",
fontSize: "0.7rem",
borderBottom: "1px solid var(--ink)",
paddingBottom: "2px",
}}
>
Read the full entry →
</div>
</article>
</Link>
))}
</div>
</section>
);
}
