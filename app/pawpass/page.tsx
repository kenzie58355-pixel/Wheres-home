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
<section style={{background:"linear-gradient(135deg,var(--terracotta),var(--stamp-red))",color:"#F5EEDF",borderRadius:"20px",margin:"20px 24px 0",padding:"100px 48px",textAlign:"center",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:"-60px",left:"-40px",fontSize:"11rem",opacity:0.1}}>🐾</div>
<div style={{position:"absolute",bottom:"-60px",right:"-40px",fontSize:"11rem",opacity:0.1}}>🐾</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.8rem",opacity:0.9,letterSpacing:"0.1em",position:"relative"}}>NOBODY ELSE IS BUILDING THIS</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2.6rem,6vw,4.2rem)",fontWeight:600,maxWidth:"780px",margin:"22px auto",position:"relative",lineHeight:1.05}}>Every dog-travel app out there was built by someone who stayed home.</h1>
<p style={{opacity:0.95,maxWidth:"600px",margin:"0 auto 32px",fontSize:"1.05rem",position:"relative"}}>This one wasn&apos;t. Every pin, every rating, every gym listing on PawPass got tested by an actual dog, in an actual foreign country, by someone who actually needed it to exist first.</p>
<a href="/pawpass/explore" style={{display:"inline-block",background:"#F5EEDF",color:"var(--stamp-red)",padding:"16px 34px",borderRadius:"100px",fontWeight:700,fontSize:"0.95rem",textDecoration:"none",position:"relative"}}>See It In Action →</a>
</section>

{currentDest && (
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"70px 48px 20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Proof, Not Promises</span>
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
