import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import { entries } from "../data";
import { destinations } from "../../data/destinations";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
const { slug } = await params;
const entry = entries.find((e) => e.slug === slug);
if (!entry) return {};
return {
title: entry.title + " | Where's Home?",
description: entry.excerpt,
openGraph: {
title: entry.title,
description: entry.excerpt,
},
};
}

export default async function JournalEntry({ params }: { params: Promise<{ slug: string }> }) {
const { slug } = await params;
const entry = entries.find((e) => e.slug === slug);
if (!entry) return notFound();
if (entry.publishDate && new Date(entry.publishDate) > new Date()) return notFound();

const related = entries.filter((e) => e.slug !== entry.slug).slice(0, 3);
const dest = entry.destination ? destinations.find((d) => d.slug === entry.destination) : null;

return (
<main>
<Nav />
<div style={{maxWidth:"700px",margin:"0 auto",padding:"30px 48px 0",fontSize:"0.8rem",opacity:0.7}}>
<Link href="/" style={{color:"var(--ink)",textDecoration:"none"}}>Where&apos;s Home</Link> / <Link href="/journal" style={{color:"var(--ink)",textDecoration:"none"}}>Journal</Link> / {entry.title}
</div>
<section style={{maxWidth:"700px",margin:"0 auto",padding:"20px 48px 30px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",color:"var(--stamp-red)",display:"block",marginBottom:"14px"}}>{entry.dateline}</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,5vw,3.2rem)",fontWeight:600,lineHeight:1.05,marginBottom:"20px"}}>{entry.title}</h1>
<div style={{display:"flex",gap:"18px",fontSize:"0.78rem",opacity:0.65,flexWrap:"wrap"}}>
<span>{entry.date}</span><span>·</span><span>{entry.readTime}</span><span>·</span><span>{entry.category}</span>
</div>
</section>

<section style={{height:"320px",borderRadius:"18px",margin:"0 24px 50px",background:"linear-gradient(160deg,#8a6a4a,#4a3a2a)"}}></section>

<section style={{maxWidth:"680px",margin:"0 auto",padding:"0 48px 30px",fontSize:"1.05rem",lineHeight:1.75}}>
{entry.body.map((block, i) => {
if (block.type === "drop") {
return (
<p key={i} style={{marginBottom:"22px"}}>
<span style={{float:"left",fontFamily:"'Fraunces',serif",fontSize:"3.4rem",lineHeight:0.8,fontWeight:600,padding:"6px 10px 0 0",color:"var(--terracotta)"}}>{block.letter}</span>
{block.text}
</p>
);
}
if (block.type === "pull") {
return (
<div key={i} style={{fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:"1.4rem",color:"var(--terracotta)",borderLeft:"3px solid var(--terracotta)",paddingLeft:"20px",margin:"36px 0",lineHeight:1.4}}>
{block.text}
</div>
);
}
return <p key={i} style={{marginBottom:"22px"}}>{block.text}</p>;
})}
</section>

{dest && (
<section style={{maxWidth:"680px",margin:"0 auto",padding:"0 48px 30px"}}>
<Link href={"/destinations/" + dest.slug} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--paper-2)",borderRadius:"16px",padding:"24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"14px"}}>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.62rem",opacity:0.7,display:"block",marginBottom:"6px"}}>This entry happened in</span>
<strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem"}}>{dest.flag} {dest.city}, {dest.country}</strong>
</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",color:"var(--terracotta)",fontWeight:600}}>Explore {dest.city} →</span>
</div>
</Link>
</section>
)}

{(entry.gym || entry.location) && (
<section style={{maxWidth:"680px",margin:"0 auto",padding:"0 48px 70px"}}>
<div style={{background:"var(--paper-2)",borderRadius:"16px",padding:"26px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",color:"var(--terracotta)",display:"block",marginBottom:"14px"}}>Trip Details</span>
{entry.location && <div style={{display:"flex",justifyContent:"space-between",fontSize:"0.85rem",padding:"8px 0",borderBottom:"1px solid rgba(43,36,32,0.12)"}}><span>Location</span><span>{entry.location}</span></div>}
{entry.gym && <div style={{display:"flex",justifyContent:"space-between",fontSize:"0.85rem",padding:"8px 0",borderBottom:"1px solid rgba(43,36,32,0.12)"}}><span>Gym</span><span>{entry.gym}</span></div>}
{entry.elevation && <div style={{display:"flex",justifyContent:"space-between",fontSize:"0.85rem",padding:"8px 0"}}><span>Elevation</span><span>{entry.elevation}</span></div>}
</div>
</section>
)}

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
<h4 style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.6,marginBottom:"24px"}}>More from the Journal</h4>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"20px"}}>
{related.map((r, i) => (
<Link key={i} href={"/journal/" + r.slug} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--paper-2)",borderRadius:"12px",padding:"20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.6rem",color:"var(--stamp-red)",display:"block",marginBottom:"8px"}}>{r.date}</span>
<h5 style={{fontFamily:"'Fraunces',serif",fontSize:"0.95rem"}}>{r.title}</h5>
</div>
</Link>
))}
</div>
</section>
<Footer />
</main>
);
}
