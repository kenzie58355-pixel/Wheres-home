import Nav from "../components/Nav";
import Footer from "../components/Footer";

const gingerFacts = [
{ label: "Favorite Country", value: "Bolivia (so far)" },
{ label: "Favorite Snack", value: "Anything off your plate" },
{ label: "Favorite Hike", value: "Parque Urbano Central" },
{ label: "Favorite Toy", value: "The one you're holding" },
{ label: "Airports Survived", value: "7" },
{ label: "Follow Along", value: "@SipOfGingerAle" },
];

const kenzieFacts = [
{ label: "Hometown", value: "Dallas, Texas" },
{ label: "Sport Journey", value: "Wrestling to MMA" },
{ label: "Core Values", value: "Freedom, growth, discipline" },
{ label: "Go-To Order", value: "Whatever has the most protein" },
{ label: "Non-Negotiable", value: "Pink Red Bull before anything else" },
{ label: "Travel Style", value: "Solo, slow, and unplanned" },
];

export default function Ginger() {
return (
<main>
<Nav />
<section style={{maxWidth:"800px",margin:"0 auto",padding:"70px 48px 20px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>The Real Stars of This Site</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>Meet Ginger &amp; Mackenzie!</h1>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"40px 48px 90px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(360px,1fr))",gap:"50px"}}>

<div>
<div style={{height:"420px",borderRadius:"20px",overflow:"hidden",marginBottom:"24px",background:"linear-gradient(150deg,#e8c39a,#b5522e)"}}>
<img src="/ginger-photo.png" alt="Ginger" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 15%",display:"block"}} />
</div>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600,marginBottom:"18px",textAlign:"center"}}>Ginger</h2>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}}>
{gingerFacts.map((f, i) => (
<div key={i} style={{background:"var(--paper-2)",borderRadius:"14px",padding:"16px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.6rem",opacity:0.7,display:"block",marginBottom:"6px"}}>{f.label}</span>
<strong style={{fontFamily:"'Fraunces',serif",fontSize:"0.95rem"}}>{f.value}</strong>
</div>
))}
</div>
</div>

<div>
<div style={{height:"420px",borderRadius:"20px",overflow:"hidden",marginBottom:"24px",background:"linear-gradient(150deg,#8a6a4a,#4a3a2a)"}}>
<img src="/kenzie-photo.jpg" alt="Mackenzie" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 60%",display:"block"}} />
</div>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600,marginBottom:"18px",textAlign:"center"}}>Mackenzie</h2>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}}>
{kenzieFacts.map((f, i) => (
<div key={i} style={{background:"var(--paper-2)",borderRadius:"14px",padding:"16px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.6rem",opacity:0.7,display:"block",marginBottom:"6px"}}>{f.label}</span>
<strong style={{fontFamily:"'Fraunces',serif",fontSize:"0.95rem"}}>{f.value}</strong>
</div>
))}
</div>
</div>

</div>
</section>
<Footer />
</main>
);
}
