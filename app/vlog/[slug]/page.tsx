import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import { episodes } from "../data";
import { destinations } from "../../data/destinations";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

function getYouTubeId(url: string) {
if (!url) return null;
const patterns = [/youtu\.be\/([^?&]+)/, /v=([^?&]+)/, /embed\/([^?&]+)/];
for (const p of patterns) {
const m = url.match(p);
if (m) return m[1];
}
if (/^[A-Za-z0-9_-]{6,}$/.test(url)) return url;
return null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
const { slug } = await params;
const ep = episodes.find((e) => e.slug === slug);
if (!ep) return {};
return {
title: ep.title + " | Where's Home?",
description: ep.desc,
openGraph: {
title: ep.title,
description: ep.desc,
},
};
}

export default async function Episode({ params }: { params: Promise<{ slug: string }> }) {
const { slug } = await params;
const ep = episodes.find((e) => e.slug === slug);
if (!ep) return notFound();

const now = new Date();
const drop = new Date(ep.dropDate);
const daysLeft = Math.ceil((drop.getTime() - now.getTime()) / 86400000);
const isLive = daysLeft <= 0;
const dropLabel = drop.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
const youtubeId = ep.videoUrl ? getYouTubeId(ep.videoUrl) : null;

const related = episodes.filter((e) => e.slug !== ep.slug).slice(0, 3);
const dest = ep.destination ? destinations.find((d) => d.slug === ep.destination) : null;

return (
<main>
<Nav />
<div style={{maxWidth:"800px",margin:"0 auto",padding:"30px 48px 0",fontSize:"0.8rem",opacity:0.7}}>
<Link href="/" style={{color:"var(--ink)",textDecoration:"none"}}>Where&apos;s Home</Link> / <Link href="/vlog" style={{color:"var(--ink)",textDecoration:"none"}}>Vlog</Link> / {ep.title}
</div>

<section style={{maxWidth:"800px",margin:"0 auto",padding:"20px 48px 30px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",color:"var(--terracotta)",display:"block",marginBottom:"14px"}}>{ep.category}</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,5vw,3.2rem)",fontWeight:600,lineHeight:1.05,marginBottom:"20px",filter:isLive?"none":"blur(1.5px)"}}>{ep.title}</h1>
<div style={{display:"flex",gap:"18px",fontSize:"0.78rem",opacity:0.65,flexWrap:"wrap"}}>
<span>Drop date, {dropLabel}</span>
<span>·</span>
<span>{isLive ? "Live now" : `Drops in ${daysLeft} ${daysLeft===1?"day":"days"}`}</span>
</div>
</section>

{youtubeId ? (
<section style={{maxWidth:"800px",margin:"0 auto 50px",padding:"0 24px"}}>
<div style={{position:"relative",paddingBottom:"56.25%",height:0,borderRadius:"18px",overflow:"hidden"}}>
<iframe
src={`https://www.youtube.com/embed/${youtubeId}`}
title={ep.title}
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}}
></iframe>
</div>
</section>
) : (
<section style={{height:"420px",borderRadius:"18px",margin:"0 24px 50px",background:ep.thumb,display:"flex",alignItems:"center",justifyContent:"center"}}>
{!isLive && (
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.85rem",color:"var(--cream-text)",textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.9}}>Video drops {dropLabel}</span>
)}
{isLive && (
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.8rem",color:"var(--cream-text)",opacity:0.8}}>Video coming soon</span>
)}
</section>
)}

<section style={{maxWidth:"700px",margin:"0 auto",padding:"0 48px 30px"}}>
<p style={{fontSize:"1.05rem",lineHeight:1.75,opacity:isLive?1:0.7}}>{ep.desc}</p>
</section>

{dest && (
<section style={{maxWidth:"700px",margin:"0 auto",padding:"0 48px 70px"}}>
<Link href={"/destinations/" + dest.slug} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--paper-2)",borderRadius:"16px",padding:"24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"14px"}}>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.62rem",opacity:0.7,display:"block",marginBottom:"6px"}}>Filmed in</span>
<strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem"}}>{dest.flag} {dest.city}, {dest.country}</strong>
</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",color:"var(--terracotta)",fontWeight:600}}>Explore {dest.city} →</span>
</div>
</Link>
</section>
)}

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
<h4 style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.6,marginBottom:"24px"}}>More Episodes</h4>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"20px"}}>
{related.map((r, i) => (
<Link key={i} href={"/vlog/" + r.slug} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--paper-2)",borderRadius:"12px",padding:"20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.6rem",color:"var(--terracotta)",display:"block",marginBottom:"8px"}}>{r.category}</span>
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
