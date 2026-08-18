import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { episodes } from "./data";

export default function Vlog() {
const now = new Date();

return (
<main>
<Nav />
<section style={{maxWidth:"800px",margin:"0 auto",padding:"70px 48px 40px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>The Vlog</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>From the road.</h1>
<p style={{marginTop:"14px",opacity:0.8,maxWidth:"520px"}}>A new episode every 3 days, starting Aug 28, 2026.</p>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"28px"}}>
{episodes.map((ep, i) => {
const drop = new Date(ep.dropDate);
const daysLeft = Math.ceil((drop.getTime() - now.getTime()) / 86400000);
const dropLabel = drop.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const isLive = daysLeft <= 0;
return (
<Link key={i} href={"/vlog/" + ep.slug} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--paper-2)",borderRadius:"18px",overflow:"hidden",opacity:isLive?1:0.75,border:isLive?"none":"1px dashed rgba(43,36,32,0.15)",cursor:"pointer"}}>
<div style={{height:"200px",background:ep.thumb,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"6px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.62rem",opacity:0.9,color:"var(--cream-text)",textTransform:"uppercase",letterSpacing:"0.06em"}}>Drop date, {dropLabel}</span>
<span style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem",fontWeight:600,color:"var(--cream-text)"}}>{isLive ? "Live now" : `Drops in ${daysLeft} ${daysLeft===1?"day":"days"}`}</span>
</div>
<div style={{padding:"22px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",color:"var(--terracotta)",marginBottom:"10px",display:"block"}}>{ep.category}</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontWeight:600,fontSize:"1.15rem",lineHeight:1.3,filter:isLive?"none":"blur(1.5px)"}}>{ep.title}</h3>
</div>
</div>
</Link>
);
})}
</div>
</section>
<Footer />
</main>
);
}
