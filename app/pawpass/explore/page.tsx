"use client";
import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import JourneyGlobe from "../../components/JourneyGlobe";
import { journey } from "../../data/journey";

const cityData: Record<string, { flag: string; spots: { name: string; badge: string; note: string }[] }> = {
Cali: {
flag: "🇨🇴",
spots: [
{ name: "Parque de los Perros", badge: "Dog Park", note: "A proper off-leash dog park, open enough to spend a full afternoon at." },
{ name: "A few smaller parks around Cali", badge: "Parks", note: "Scattered around the city, good for quick walks between everything else." },
{ name: "Dog Camp Cali", badge: "Field Trip", note: "A dedicated dog camp, worth a full visit on its own." },
{ name: "Jardin Plaza and the surrounding area", badge: "Shopping", note: "A real mall with dog-friendly outdoor areas nearby, easy to combine with a walk." },
{ name: "Peluqueria Canina Mundo Peludo", badge: "Grooming", note: "Cra. 38c #1-54, Nueva Granada. A genuinely great groom, full write-up in the journal." },
{ name: "The tunnels of Villamaria", badge: "Hike", note: "A last-minute hike that ended at a waterfall Ginger swam in. One of the best afternoons of the trip." },
],
},
Dallas: {
flag: "🇺🇸",
spots: [
{ name: "White Rock Lake Dog Park", badge: "Paw 4.6", note: "Separate areas for large and small dogs, plus direct lake access." },
{ name: "NorthBark Dog Park", badge: "Paw 4.5", note: "A 22-acre facility with separate enclosures and a fenced water pond." },
{ name: "Bark Park Central", badge: "Paw 3.9", note: "A 1.2-acre off-leash park decorated with vibrant street murals." },
{ name: "Dallas Farmers Market", badge: "Paw 4.5", note: "Leashed dogs welcome in the open-air pavilion and outdoor patios." },
{ name: "The Upper Paw", badge: "Paw 4.8", note: "A boutique with premium pet foods, toys, apparel, and bakery treats." },
{ name: "Uptown Pup Self-Wash", badge: "Paw 4.9", note: "DIY dog-washing stations fully stocked with professional supplies." },
],
},
};

export default function Explore() {
const [activeCity, setActiveCity] = useState("Cali");
const visitedCount = journey.route.filter((r) => r.status === "visited").length;
const currentCount = journey.route.filter((r) => r.status === "current").length;
const upcomingCount = journey.route.filter((r) => r.status === "upcoming").length;
const cities = Object.keys(cityData);

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

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 30px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"20px"}}>Dog Friendly Directory</span>
<div style={{display:"flex",gap:"10px",marginBottom:"30px",flexWrap:"wrap"}}>
{cities.map((city) => (
<button
key={city}
onClick={() => setActiveCity(city)}
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.8rem",
padding: "10px 20px",
borderRadius: "100px",
border: activeCity === city ? "none" : "1.5px solid var(--line)",
background: activeCity === city ? "var(--ink)" : "transparent",
color: activeCity === city ? "var(--paper)" : "var(--ink)",
cursor: "pointer",
fontWeight: 600,
}}
>
{cityData[city].flag} {city}
</button>
))}
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"18px"}}>
{cityData[activeCity].spots.map((p, i) => (
<div key={i} style={{background:"var(--paper-2)",borderRadius:"14px",padding:"22px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"}}>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.05rem",maxWidth:"70%"}}>{p.name}</h4>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",background:"var(--paper)",padding:"3px 10px",borderRadius:"100px",whiteSpace:"nowrap"}}>{p.badge}</span>
</div>
<p style={{fontSize:"0.85rem",opacity:0.85}}>{p.note}</p>
</div>
))}
</div>
</section>
<Footer />
</main>
);
}
