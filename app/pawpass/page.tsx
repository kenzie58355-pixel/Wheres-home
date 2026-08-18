import Nav from "../components/Nav";
import CurrentJourney from "../components/CurrentJourney";
import Footer from "../components/Footer";
import Link from "next/link";
import { journey } from "../data/journey";
import { destinations } from "../data/destinations";

const features = [
{ icon: "📍", title: "Maps", desc: "Real pins, real places" },
{ icon: "🐾", title: "Ginger Approved", desc: "Curated, rated spots" },
{ icon: "📅", title: "Itineraries", desc: "Save and edit trips" },
{ icon: "🥊", title: "Train Here", desc: "Gyms in every city" },
];

export default function PawPass() {
const currentDest = destinations.find((d) => d.city.toLowerCase() === journey.current.city.toLowerCase());

return (
<main>
<Nav />
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0"}}>
<CurrentJourney />
</div>
<section style={{background:"var(--terracotta)",color:"#F5EEDF",borderRadius:"20px",margin:"20px 24px 0",padding:"80px 48px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",opacity:0.85}}>Built Because I&apos;m Living This</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2.2rem,5vw,3.4rem)",fontWeight:600,maxWidth:"700px",margin:"18px auto"}}>Planning shouldn&apos;t take hundreds of Google searches.</h1>
<p style={{opacity:0.9,maxWidth:"560px",margin:"0 auto 28px"}}>Traveling with Ginger changed what I needed from a trip. PawPass is the tool I built to close that gap, tested in real time, in whatever city I&apos;m actually standing in.</p>
<a href="/pawpass/explore" style={{display:"inline-block",background:"#F5EEDF",color:"var(--terracotta)",padding:"14px 28px",borderRadius:"100px",fontWeight:600,fontSize:"0.85rem",textDecoration:"none"}}>Explore Spots</a>
</section>

{currentDest && (
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"70px 48px 20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>See It in Action</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"24px"}}>Right now, {currentDest.flag} {currentDest.city}.</h2>
<Link href={"/destinations/" + currentDest.slug} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--paper-2)",borderRadius:"16px",padding:"28px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"}}>
<div style={{display:"flex",gap:"32px",flexWrap:"wrap"}}>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600,color:"var(--terracotta)"}}>{currentDest.stats[0].value}</div><div style={{fontSize:"0.72rem",opacity:0.7}}>Dog-friendly spots</div></div>
{currentDest.ginger && (
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600,color:"var(--terracotta)"}}>{currentDest.ginger.rating}</div><div style={{fontSize:"0.72rem",opacity:0.7}}>Ginger&apos;s rating</div></div>
)}
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600,color:"var(--terracotta)"}}>{currentDest.guides}</div><div style={{fontSize:"0.72rem",opacity:0.7}}>Guides so far</div></div>
</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",color:"var(--terracotta)",fontWeight:600}}>See {currentDest.city} →</span>
</div>
</Link>
</section>
)}

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"50px 48px 90px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"20px"}}>
{features.map((f, i) => (
<div key={i} style={{background:"var(--paper-2)",borderRadius:"14px",padding:"26px 20px"}}>
<span style={{fontSize:"1.6rem",display:"block",marginBottom:"10px"}}>{f.icon}</span>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1rem",marginBottom:"4px"}}>{f.title}</h4>
<p style={{fontSize:"0.78rem",opacity:0.7}}>{f.desc}</p>
</div>
))}
</div>
</section>
<Footer />
</main>
);
}
