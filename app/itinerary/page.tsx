import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import CurrentJourney from "../components/CurrentJourney";
import { journey } from "../data/journey";

const days = [
{ label: "Every week", title: "The home base routine", desc: "Training, school, remote work, and building Where's Home, with long walks around the city for Ginger.", tags: "Training, Work, School" },
{ label: "Weekends", title: "Exploring Cali", desc: "Cafes with patios, parks, and day trips outside the city, the same spots that end up in the guides on this site.", tags: "Dog Friendly, Day Trips" },
{ label: "Next", title: "Regional loops", desc: "Trips out to Peru, Bolivia, and Chile, coming back to Cali in between instead of moving everything every time.", tags: "Peru, Bolivia, Chile" },
];

export default function Itinerary() {
const arrived = new Date(journey.current.arrived + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const departs = journey.current.departs ? new Date(journey.current.departs + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "open-ended";

return (
<main>
<Nav />
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0"}}>
<CurrentJourney />
</div>
<section style={{maxWidth:"800px",margin:"0 auto",padding:"40px 48px 20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Current Base</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>Right now, I&apos;m in {journey.current.city}.</h1>
<p style={{marginTop:"16px",opacity:0.85}}>This page always shows where I actually am, not a fixed trip plan. Each time I move to a new city, this swaps to the new one. Exact addresses are never shared, city and neighborhood level only, for safety.</p>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 40px"}}>
<div style={{background:"var(--paper-2)",borderRadius:"18px",padding:"32px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:"24px"}}>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.7,display:"block",marginBottom:"6px"}}>Location</span>
<strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.2rem"}}>{journey.current.city}, {journey.current.country}</strong>
</div>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.7,display:"block",marginBottom:"6px"}}>Dates</span>
<strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.2rem"}}>{arrived}, to {departs}</strong>
</div>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.7,display:"block",marginBottom:"6px"}}>Status</span>
<strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.2rem"}}>Home base</strong>
</div>
</div>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 70px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Life at Home Base</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"36px"}}>A rough shape, not a rigid plan.</h2>
{days.map((d, i) => (
<div key={i} style={{display:"grid",gridTemplateColumns:"140px 1fr",gap:"24px",marginBottom:"36px"}}>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem",fontWeight:600,color:"var(--terracotta)"}}>{d.label}</div>
<div style={{borderLeft:"2px solid rgba(43,36,32,0.12)",paddingLeft:"24px"}}>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.2rem",marginBottom:"8px"}}>{d.title}</h4>
<p style={{fontSize:"0.9rem",opacity:0.85,marginBottom:"8px"}}>{d.desc}</p>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em"}}>{d.tags}</span>
</div>
</div>
))}
</section>
<section style={{background:"var(--teal)",color:"#F5EEDF",borderRadius:"20px",margin:"0 24px",padding:"50px 48px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--apricot)",display:"block",marginBottom:"10px"}}>Next Up</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3vw,2.2rem)",fontWeight:600}}>Peru, Bolivia, and Chile are the next loop.</h2>
<p style={{marginTop:"12px",opacity:0.9}}>Dates are not set yet. They go here as soon as they are.</p>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"70px 48px 90px"}}>
<div style={{background:"var(--apricot)",borderRadius:"16px",padding:"32px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem"}}>Want a personalized guide for wherever you&apos;re headed?</span>
<Link href="/work-with-us" style={{background:"var(--ink)",color:"var(--paper)",padding:"14px 26px",borderRadius:"100px",fontWeight:600,fontSize:"0.85rem",textDecoration:"none"}}>Request Custom Itinerary</Link>
</div>
</section>
<Footer />
</main>
);
}
