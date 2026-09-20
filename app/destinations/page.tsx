import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { destinations } from "../data/destinations";

export default function Destinations() {
const realDestinations = destinations.filter((d) => d.dogFriendliness !== "N/A");

return (
<main>
<Nav />
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"70px 48px 40px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Destinations</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>Where we&apos;ve actually been.</h1>
<p style={{marginTop:"14px",opacity:0.8,maxWidth:"520px"}}>Every guide here is built from real trips, not research. More added as we travel.</p>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"24px"}}>
{realDestinations.map((d, i) => (
<Link key={i} href={"/destinations/" + d.slug} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--paper-2)",borderRadius:"16px",overflow:"hidden",cursor:"pointer"}}>
<div style={{height:"190px",background:d.heroGradient,position:"relative"}}>
<span style={{position:"absolute",top:"14px",right:"14px",background:"rgba(247,242,231,0.9)",padding:"5px 12px",borderRadius:"100px",fontSize:"0.68rem",fontFamily:"'Space Mono',monospace"}}>
{d.dogFriendliness === "TBD" ? "Coming Soon" : "Paw " + d.dogFriendliness}
</span>
</div>
<div style={{padding:"20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.7,display:"block",marginBottom:"6px"}}>{d.flag} {d.country}</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem",fontWeight:600,marginBottom:"6px"}}>{d.city}</h3>
<span style={{fontSize:"0.8rem",opacity:0.75}}>{d.guides} guides, {d.itineraries} itineraries</span>
</div>
</div>
</Link>
))}
</div>
<div style={{marginTop:"32px",background:"var(--apricot)",borderRadius:"16px",padding:"32px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem"}}>Want a destination I haven&apos;t been to yet?</span>
<Link href="/work-with-us" style={{background:"var(--ink)",color:"var(--paper)",padding:"14px 26px",borderRadius:"100px",fontWeight:600,fontSize:"0.85rem",textDecoration:"none"}}>Request Custom Guide</Link>
</div>
</section>
<Footer />
</main>
);
}
