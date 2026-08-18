import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import JourneyGlobe from "../../components/JourneyGlobe";
import { journey } from "../../data/journey";

const parks = [
{ name: "White Rock Lake Dog Park", address: "8000 E Mockingbird Ln", rating: "4.6", note: "Separate areas for large and small dogs, plus direct lake access for pups who love to swim." },
{ name: "NorthBark Dog Park", address: "4899 Gramercy Oaks Dr", rating: "4.5", note: "A 22-acre facility with separate enclosures, walking trails, and a fenced water pond." },
{ name: "Bark Park Central", address: "2530 Commerce St, Deep Ellum", rating: "3.9", note: "A 1.2-acre off-leash park decorated with vibrant street murals." },
];

const shopping = [
{ name: "Dallas Farmers Market", address: "920 S Harwood St", rating: "4.5", note: "Leashed dogs welcome in the open-air pavilion and outdoor patios. Lula Pup Shop is right inside for treats and accessories." },
{ name: "The Upper Paw", address: "2809 Commerce St, Deep Ellum", rating: "4.8", note: "A boutique with premium pet foods, toys, apparel, and homemade bakery treats." },
];

const grooming = [
{ name: "Uptown Pup Self-Wash", address: "2905 Thomas Ave", rating: "4.9", note: "DIY dog-washing stations fully stocked with professional shampoos, towels, brushes, and blow-dryers." },
{ name: "Bruno's Place DIY Dog Wash", address: "1019 W Davis St, Oak Cliff", rating: "4.7", note: "Self-serve stainless steel tubs and high-velocity dryers." },
];

const upcoming = [
{ city: "Bogota, Colombia" },
{ city: "Rio de Janeiro, Brazil" },
];

function PlaceCard({ p }: { p: { name: string; address: string; rating: string; note: string } }) {
return (
<div style={{background:"var(--paper-2)",borderRadius:"14px",padding:"22px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"}}>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.05rem"}}>{p.name}</h4>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",background:"var(--paper)",padding:"3px 10px",borderRadius:"100px"}}>Paw {p.rating}</span>
</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.68rem",opacity:0.65,display:"block",marginBottom:"10px"}}>{p.address}</span>
<p style={{fontSize:"0.85rem",opacity:0.85}}>{p.note}</p>
</div>
);
}

export default function Explore() {
const visitedCount = journey.route.filter((r) => r.status === "visited").length;
const currentCount = journey.route.filter((r) => r.status === "current").length;
const upcomingCount = journey.route.filter((r) => r.status === "upcoming").length;

return (
<main>
<Nav />
<section style={{maxWidth:"800px",margin:"0 auto",padding:"70px 48px 20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>The Journey</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>{journey.countriesVisited} of {journey.countriesTotal} countries so far.</h1>
<p style={{marginTop:"14px",opacity:0.85,maxWidth:"520px"}}>Drag the globe. Click a point. Follow the route as it happens.</p>
</section>

<section style={{maxWidth:"1000px",margin:"0 auto",padding:"20px 48px 20px"}}>
<JourneyGlobe />
</section>

<section style={{maxWidth:"1000px",margin:"0 auto",padding:"0 48px 70px",display:"flex",gap:"40px",flexWrap:"wrap"}}>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.6rem",fontWeight:600,color:"var(--stamp-red)"}}>{visitedCount}</div><div style={{fontSize:"0.7rem",opacity:0.7,textTransform:"uppercase",letterSpacing:"0.06em"}}>Visited</div></div>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.6rem",fontWeight:600,color:"var(--teal)"}}>{currentCount}</div><div style={{fontSize:"0.7rem",opacity:0.7,textTransform:"uppercase",letterSpacing:"0.06em"}}>Current</div></div>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.6rem",fontWeight:600,color:"var(--apricot)"}}>{upcomingCount}</div><div style={{fontSize:"0.7rem",opacity:0.7,textTransform:"uppercase",letterSpacing:"0.06em"}}>Upcoming</div></div>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"1.6rem",fontWeight:600,opacity:0.4}}>?</div><div style={{fontSize:"0.7rem",opacity:0.7,textTransform:"uppercase",letterSpacing:"0.06em"}}>Planned</div></div>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 30px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--stamp-red)",display:"block",marginBottom:"20px"}}>Dallas, Texas, Live Now</span>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 50px"}}>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",marginBottom:"18px"}}>Dog Parks and Green Spaces</h3>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"18px"}}>
{parks.map((p, i) => <PlaceCard key={i} p={p} />)}
</div>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 50px"}}>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",marginBottom:"18px"}}>Shopping and Markets</h3>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"18px"}}>
{shopping.map((p, i) => <PlaceCard key={i} p={p} />)}
</div>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 70px"}}>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",marginBottom:"18px"}}>Grooming and Self-Wash</h3>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"18px"}}>
{grooming.map((p, i) => <PlaceCard key={i} p={p} />)}
</div>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.6,display:"block",marginBottom:"20px"}}>More Cities, Coming As We Travel</span>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"18px"}}>
{upcoming.map((u, i) => (
<div key={i} style={{background:"var(--paper-2)",border:"1px dashed var(--line)",borderRadius:"14px",padding:"24px",opacity:0.6}}>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.05rem",marginBottom:"6px",filter:"blur(1px)"}}>{u.city}</h4>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.68rem"}}>Fills in when we arrive</span>
</div>
))}
</div>
</section>
<Footer />
</main>
);
}
