import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CurrentJourney from "../../components/CurrentJourney";
import JourneyGlobe from "../../components/JourneyGlobe";
import SaveButton from "../../components/SaveButton";
import Link from "next/link";
import { destinations } from "../../data/destinations";
import { journey } from "../../data/journey";
import { entries } from "../../journal/data";
import { episodes } from "../../vlog/data";
import { notFound } from "next/navigation";

export default async function Destination({ params }: { params: Promise<{ slug: string }> }) {
const { slug } = await params;
const dest = destinations.find((d) => d.slug === slug);
if (!dest) return notFound();

const isCurrent = journey.current.city.toLowerCase() === dest.city.toLowerCase();
const now = new Date();
const relatedEntries = entries.filter((e) => e.destination === slug && (!e.publishDate || new Date(e.publishDate) <= now));
const relatedEpisodes = episodes.filter((ep) => ep.destination === slug);

return (
<main>
<Nav />
{isCurrent && (
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0"}}>
<CurrentJourney />
</div>
)}
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.8rem",opacity:0.7}}>
<span>
<Link href="/" style={{color:"var(--ink)",textDecoration:"none"}}>Where&apos;s Home</Link> / <Link href="/destinations" style={{color:"var(--ink)",textDecoration:"none"}}>Destinations</Link> / {dest.country}
</span>
<SaveButton />
</div>
<section style={{height:"60vh",minHeight:"420px",background:dest.heroGradient,borderRadius:"20px",margin:"20px 24px 0",position:"relative",display:"flex",alignItems:"flex-end",overflow:"hidden"}}>
<div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(20,15,10,.88),rgba(20,15,10,.15) 60%)"}}></div>
<div style={{position:"relative",padding:"48px",color:"#F7F2E7"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",opacity:0.9}}>{dest.flag} {dest.country}, {dest.region}</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2.4rem,6vw,4rem)",fontWeight:600,marginTop:"10px",marginBottom:"20px"}}>{dest.city}</h1>
<div style={{display:"flex",gap:"40px",flexWrap:"wrap",fontSize:"0.85rem"}}>
<div><strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",display:"block"}}>{dest.elevation}</strong>Elevation</div>
<div><strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",display:"block"}}>{dest.dogFriendliness}</strong>Dog Friendliness</div>
<div><strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",display:"block"}}>{dest.guides}</strong>Guides</div>
<div><strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",display:"block"}}>{dest.itineraries}</strong>Itineraries</div>
</div>
</div>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"70px 48px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Overview</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"30px",maxWidth:"640px"}}>{dest.overviewTitle}</h2>
<div style={{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:"40px",flexWrap:"wrap"}}>
<p style={{opacity:0.85}}>{dest.overview}</p>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
{dest.stats.map((s, i) => (
<div key={i} style={{background:"var(--paper-2)",borderRadius:"14px",padding:"20px"}}>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"1.6rem",fontWeight:600,color:"var(--terracotta)"}}>{s.value}</div>
<div style={{fontSize:"0.72rem",opacity:0.7}}>{s.label}</div>
</div>
))}
</div>
</div>
</section>

{dest.ginger && (
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 70px"}}>
<div style={{background:"var(--apricot)",borderRadius:"18px",padding:"40px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--ink)",opacity:0.7,display:"block",marginBottom:"10px"}}>Ginger&apos;s {dest.city}</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3vw,2.2rem)",fontWeight:600,marginBottom:"24px"}}>Her experience, in numbers.</h2>
<div style={{display:"flex",gap:"40px",flexWrap:"wrap",marginBottom:"24px"}}>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.8rem",fontWeight:600}}>{dest.ginger.rating}</div><div style={{fontSize:"0.72rem",opacity:0.75}}>Rating out of 10</div></div>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.8rem",fontWeight:600}}>{dest.ginger.parksVisited}</div><div style={{fontSize:"0.72rem",opacity:0.75}}>Hikes and parks visited</div></div>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.8rem",fontWeight:600}}>{dest.ginger.cafesVisited}</div><div style={{fontSize:"0.72rem",opacity:0.75}}>Cafes visited</div></div>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.8rem",fontWeight:600}}>{dest.ginger.groomingUsed}</div><div style={{fontSize:"0.72rem",opacity:0.75}}>Grooming visit</div></div>
</div>
{dest.ginger.spotsVisited && (
<div style={{marginBottom:"20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",textTransform:"uppercase",letterSpacing:"0.06em",opacity:0.7,display:"block",marginBottom:"10px"}}>Everywhere she&apos;s been here</span>
<div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
{dest.ginger.spotsVisited.map((spot: string, i: number) => (
<span key={i} style={{background:"var(--paper)",padding:"6px 14px",borderRadius:"100px",fontSize:"0.78rem"}}>{spot}</span>
))}
</div>
</div>
)}
<div style={{display:"flex",flexDirection:"column",gap:"6px"}}>
<span style={{fontSize:"0.85rem",opacity:0.85}}>Favorite spot so far, {dest.ginger.favoritePlace}.</span>
{dest.ginger.groomingSpot && (
<span style={{fontSize:"0.85rem",opacity:0.85}}>
Groomed at <strong>{dest.ginger.groomingSpot.name}</strong>, {dest.ginger.groomingSpot.address}.
</span>
)}
</div>
</div>
</section>
)}

{(relatedEntries.length > 0 || relatedEpisodes.length > 0) && (
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 70px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>From {dest.city}</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"30px"}}>The story so far.</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"20px"}}>
{relatedEpisodes.map((ep, i) => (
<Link key={"ep"+i} href={"/vlog/" + ep.slug} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--paper-2)",borderRadius:"14px",padding:"20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.6rem",color:"var(--terracotta)",display:"block",marginBottom:"8px"}}>Vlog, {ep.category}</span>
<h5 style={{fontFamily:"'Fraunces',serif",fontSize:"0.95rem"}}>{ep.title}</h5>
</div>
</Link>
))}
{relatedEntries.map((e, i) => (
<Link key={"je"+i} href={"/journal/" + e.slug} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--paper-2)",borderRadius:"14px",padding:"20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.6rem",color:"var(--stamp-red)",display:"block",marginBottom:"8px"}}>Journal</span>
<h5 style={{fontFamily:"'Fraunces',serif",fontSize:"0.95rem"}}>{e.title}</h5>
</div>
</Link>
))}
</div>
</section>
)}

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 70px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>The Journey</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"12px"}}>Where {dest.city} fits on the route.</h2>
<p style={{opacity:0.8,marginBottom:"30px"}}>Drag the globe. Click a point. This is the same live map from the homepage and PawPass.</p>
<JourneyGlobe />
<div style={{marginTop:"20px"}}>
<Link href="/pawpass/explore" style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",color:"var(--terracotta)",fontWeight:600,textDecoration:"none"}}>See the full journey and current city guide →</Link>
</div>
</section>
<section style={{background:"var(--teal)",color:"#F5EEDF",borderRadius:"20px",margin:"0 24px",padding:"60px 48px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--apricot)",display:"block",marginBottom:"10px"}}>Train Here, powered by MMAatHome</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"30px"}}>Discipline doesn&apos;t take a vacation.</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"20px"}}>
{dest.gyms.length > 0 ? dest.gyms.map((g, i) => (
<div key={i} style={{border:"1px solid rgba(245,238,223,0.2)",borderRadius:"14px",padding:"20px"}}>
<h4 style={{fontFamily:"'Fraunces',serif",marginBottom:"4px"}}>{g.name}</h4>
<span style={{fontSize:"0.72rem",opacity:0.7}}>{g.area}</span>
</div>
)) : (
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.78rem",opacity:0.8}}>No gyms logged here yet.</span>
)}
</div>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"70px 48px 90px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Plan the Trip</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"30px"}}>Already mapped out for you.</h2>
<div style={{background:"var(--apricot)",borderRadius:"16px",padding:"36px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"}}>
<div><span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem"}}>Current Base</span><h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.4rem",marginTop:"6px"}}>See where I am right now</h4></div>
<Link href="/itinerary" style={{background:"var(--ink)",color:"var(--paper)",padding:"14px 26px",borderRadius:"100px",fontWeight:600,fontSize:"0.85rem",textDecoration:"none"}}>View Current Base</Link>
</div>
</section>
<Footer />
</main>
);
}
