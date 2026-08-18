import Nav from "../components/Nav";
import Footer from "../components/Footer";

const gyms = [
{ name: "Altitud MMA and BJJ", city: "La Paz, Bolivia", area: "Los Pinos", note: "Drop-ins welcome, mats built for gi and no-gi, altitude-adjusted pacing." },
];

const upcoming = [
{ city: "Bogota, Colombia" },
{ city: "Rio de Janeiro, Brazil" },
];

export default function Training() {
return (
<main>
<Nav />
<section style={{maxWidth:"800px",margin:"0 auto",padding:"70px 48px 20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Combat Sports</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>Every gym I actually train at.</h1>
<p style={{marginTop:"14px",opacity:0.85,maxWidth:"520px"}}>Discipline doesn't take a vacation. This list grows one city at a time, as I actually walk through the door.</p>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 50px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"20px"}}>
{gyms.map((g, i) => (
<div key={i} style={{background:"var(--teal)",color:"#F5EEDF",borderRadius:"16px",padding:"28px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",color:"var(--apricot)",display:"block",marginBottom:"10px"}}>{g.city}</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.2rem",marginBottom:"6px"}}>{g.name}</h3>
<span style={{fontSize:"0.78rem",opacity:0.8,display:"block",marginBottom:"12px"}}>{g.area}</span>
<p style={{fontSize:"0.85rem",opacity:0.9}}>{g.note}</p>
</div>
))}
</div>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.6,display:"block",marginBottom:"20px"}}>More Cities, Added As We Train There</span>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"18px"}}>
{upcoming.map((u, i) => (
<div key={i} style={{background:"var(--paper-2)",border:"1px dashed var(--line)",borderRadius:"14px",padding:"24px",opacity:0.6}}>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.05rem",filter:"blur(1px)"}}>{u.city}</h4>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.68rem"}}>Fills in once we train there</span>
</div>
))}
</div>
</section>
<Footer />
</main>
);
}
