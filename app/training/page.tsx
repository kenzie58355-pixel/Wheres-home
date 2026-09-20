import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CurrentJourney from "../components/CurrentJourney";
import { destinations } from "../data/destinations";
import { journey } from "../data/journey";

const cardColors = ["var(--teal)", "var(--terracotta)", "var(--stamp-red)"];

export default function Training() {
const allGyms = destinations.flatMap((d) => d.gyms.map((g) => ({ ...g, city: d.city, country: d.country, flag: d.flag })));

return (
<main>
<Nav />
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0"}}>
<CurrentJourney />
</div>
<section style={{background:"linear-gradient(135deg,var(--teal),#0f2a28)",color:"#F5EEDF",borderRadius:"20px",margin:"20px 24px 0",padding:"100px 48px",textAlign:"center",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:"-50px",left:"-30px",fontSize:"11rem",opacity:0.1}}>🥊</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.8rem",opacity:0.9,letterSpacing:"0.12em"}}>COMBAT SPORTS</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2.6rem,6.5vw,4.6rem)",fontWeight:600,maxWidth:"780px",margin:"22px auto",lineHeight:1.02,position:"relative"}}>Every gym I actually train at.</h1>
<p style={{opacity:0.9,maxWidth:"540px",margin:"0 auto",fontSize:"1.05rem",position:"relative"}}>Discipline doesn&apos;t take a vacation. Nothing gets added here until I actually walk through the door.</p>
</section>

<section style={{maxWidth:"1000px",margin:"60px auto 0",padding:"0 48px"}}>
<div style={{background:"var(--ink)",color:"var(--paper)",borderRadius:"20px",padding:"44px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"24px",textAlign:"center"}}>
<div>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"2.2rem",fontWeight:600,color:"var(--apricot)"}}>{allGyms.length}</div>
<div style={{fontSize:"0.75rem",opacity:0.8}}>Gyms walked into</div>
</div>
<div>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"2.2rem",fontWeight:600,color:"var(--apricot)"}}>{new Set(allGyms.map((g) => g.country)).size}</div>
<div style={{fontSize:"0.75rem",opacity:0.8}}>Countries trained in</div>
</div>
<div>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"2.2rem",fontWeight:600,color:"var(--apricot)"}}>0</div>
<div style={{fontSize:"0.75rem",opacity:0.8}}>Gyms faked or listed without visiting</div>
</div>
</div>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"70px 48px 90px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"24px"}}>
{allGyms.length > 0 ? allGyms.map((g, i) => (
<div key={i} style={{background:cardColors[i % cardColors.length],color:"#F5EEDF",borderRadius:"20px",padding:"36px",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",bottom:"-20px",right:"-10px",fontSize:"6rem",opacity:0.12}}>🥋</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",color:"var(--apricot)",display:"block",marginBottom:"12px",position:"relative"}}>{g.flag} {g.city}, {g.country}</span>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.7rem",fontWeight:600,marginBottom:"14px",position:"relative"}}>{g.name}</h4>
<p style={{fontSize:"0.92rem",opacity:0.9,position:"relative"}}>Great training, good people. This is the real spot, logged after actually walking in.</p>
</div>
)) : (
<div style={{background:"var(--paper-2)",border:"1px dashed var(--line)",borderRadius:"16px",padding:"32px",textAlign:"center",gridColumn:"1 / -1"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.72rem",opacity:0.7}}>No gyms logged yet in {journey.current.country}.</span>
</div>
)}
</div>
</section>
<Footer />
</main>
);
}
