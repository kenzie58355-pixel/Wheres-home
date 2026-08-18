import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { entries } from "./data";

export default function Journal() {
const now = new Date();
const isLive = (e) => !e.publishDate || new Date(e.publishDate) <= now;

const live = entries.filter(isLive);
const upcoming = entries.filter((e) => !isLive(e));

const featured = live.find((e) => e.featured) || live[0];
const rest = live.filter((e) => e.slug !== featured?.slug);

return (
<main>
<Nav />
<section style={{maxWidth:"800px",margin:"0 auto",padding:"70px 48px 40px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--stamp-red)",display:"block",marginBottom:"10px"}}>The Journal</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>Some things deserve more than a caption.</h1>
<p style={{marginTop:"14px",opacity:0.8,maxWidth:"520px"}}>Every dispatch from the road, in one place, newest first.</p>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"28px"}}>
{featured && (
<Link href={"/journal/" + featured.slug} style={{textDecoration:"none",color:"inherit",gridColumn:"1 / -1"}}>
<div style={{position:"relative",background:"var(--teal)",color:"#F5EEDF",borderRadius:"14px",padding:"44px",cursor:"pointer"}}>
<div style={{position:"absolute",top:"-14px",right:"18px",width:"50px",height:"50px",borderRadius:"50%",border:"1.5px dashed var(--apricot)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.42rem",textAlign:"center",background:"var(--paper)",color:"var(--apricot)",transform:"rotate(8deg)"}}>{featured.postmark}</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.62rem",color:"var(--apricot)",display:"block",marginBottom:"14px"}}>Featured, {featured.dateline}, {featured.date}</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.7rem",fontWeight:600,marginBottom:"10px"}}>{featured.title}</h3>
<p style={{fontSize:"0.9rem",opacity:0.9,maxWidth:"600px",marginBottom:"16px"}}>{featured.excerpt}</p>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.68rem",borderBottom:"1px solid #F5EEDF",paddingBottom:"2px"}}>Read the full entry →</span>
</div>
</Link>
)}
{rest.map((e, i) => (
<Link key={i} href={"/journal/" + e.slug} style={{textDecoration:"none",color:"inherit"}}>
<div style={{position:"relative",background:"var(--paper-2)",borderRadius:"14px",padding:"30px 26px 26px",cursor:"pointer"}}>
<div style={{position:"absolute",top:"-14px",right:"18px",width:"50px",height:"50px",borderRadius:"50%",border:"1.5px dashed var(--teal)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.42rem",textAlign:"center",background:"var(--paper)",color:"var(--teal)",transform:"rotate(8deg)"}}>{e.postmark}</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.62rem",color:"var(--stamp-red)",display:"block",marginBottom:"14px"}}>{e.dateline}, {e.date}</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.25rem",fontWeight:600,marginBottom:"10px",lineHeight:1.25}}>{e.title}</h3>
<p style={{fontSize:"0.88rem",opacity:0.8,marginBottom:"16px"}}>{e.excerpt}</p>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.68rem",borderBottom:"1px solid var(--ink)",paddingBottom:"2px"}}>Read the full entry →</span>
</div>
</Link>
))}

{upcoming.map((e, i) => {
const daysLeft = Math.ceil((new Date(e.publishDate).getTime() - now.getTime()) / 86400000);
return (
<div key={"up-" + i} style={{position:"relative",background:"var(--paper-2)",borderRadius:"14px",padding:"30px 26px 26px",opacity:0.55,cursor:"not-allowed",border:"1px dashed var(--line)"}}>
<div style={{position:"absolute",top:"-14px",right:"18px",background:"var(--ink)",color:"var(--paper)",borderRadius:"100px",padding:"6px 14px",fontFamily:"'Space Mono',monospace",fontSize:"0.6rem",textTransform:"uppercase",letterSpacing:"0.06em"}}>
Drops in {daysLeft} {daysLeft === 1 ? "day" : "days"}
</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.62rem",color:"var(--stamp-red)",display:"block",marginBottom:"14px"}}>{e.dateline}, {e.date}</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.25rem",fontWeight:600,marginBottom:"10px",lineHeight:1.25,filter:"blur(2px)"}}>{e.title}</h3>
<p style={{fontSize:"0.88rem",opacity:0.8}}>Full entry publishes {e.date}, once it actually happens.</p>
</div>
);
})}
</div>
</section>
<Footer />
</main>
);
}
