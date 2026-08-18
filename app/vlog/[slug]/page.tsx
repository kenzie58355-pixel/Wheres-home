import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import { episodes } from "../data";
import { destinations } from "../../data/destinations";
import { notFound } from "next/navigation";

export default async function Episode({ params }: { params: Promise<{ slug: string }> }) {
const { slug } = await params;
const ep = episodes.find((e) => e.slug === slug);
if (!ep) return notFound();

const now = new Date();
const drop = new Date(ep.dropDate);
const daysLeft = Math.ceil((drop.getTime() - now.getTime()) / 86400000);
const isLive = daysLeft <= 0;
const dropLabel = drop.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

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

<section style={{height:"420px",borderRadius:"18px",margin:"0 24px 50px",background:ep.thumb,display:"flex",alignItems:"center",justifyContent:"center"}}>
{!isLive && (
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.85rem",color:"var(--cream-text)",textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.9}}>Video drops {dropLabel}</span>
)}
</section>

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
