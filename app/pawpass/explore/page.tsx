"use client";
import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import JourneyGlobe from "../../components/JourneyGlobe";
import { journey } from "../../data/journey";

const cityData: Record<string, { flag: string; spots: { name: string; badge: string; note: string; mapQuery: string }[] }> = {
Cali: {
flag: "🇨🇴",
spots: [
{ name: "Parque del Perro", badge: "Dog Park", note: "A lively plaza in San Fernando, named for a dog statue, cafes and bars ring the whole square.", mapQuery: "Parque del Perro, San Fernando, Cali, Colombia" },
{ name: "A few smaller parks around Cali", badge: "Parks", note: "Scattered around the city, good for quick walks between everything else.", mapQuery: "Cali, Colombia" },
{ name: "Dog Camp Cali", badge: "Field Trip", note: "A dedicated dog camp, worth a full visit on its own.", mapQuery: "Cali, Colombia" },
{ name: "Jardin Plaza and the surrounding area", badge: "Shopping", note: "A major mall in Ciudad Jardin with dog-friendly outdoor areas nearby, easy to combine with a walk.", mapQuery: "Jardin Plaza, Cali, Colombia" },
{ name: "Peluqueria Canina Mundo Peludo", badge: "Grooming", note: "Cra. 38c #1-54, Nueva Granada. A genuinely great groom, full write-up in the journal.", mapQuery: "Peluqueria Canina Mundo Peludo, Cra. 38c #1-54, Cali, Colombia" },
{ name: "The tunnels of Villamaria", badge: "Hike", note: "A last-minute hike that ended at a waterfall Ginger swam in. One of the best afternoons of the trip.", mapQuery: "Tunel de Villamaria, Caldas, Colombia" },
{ name: "La Marianela Coffee Shop", badge: "Café", note: "A breakfast and coffee spot in Granada with an indoor floor and a breezy upstairs terrace, listed as dog friendly. One of the best breakfasts in the city.", mapQuery: "La Marianela Coffee Shop, Av. 9A #14n-73, Granada, Cali, Colombia" },
{ name: "Tierradentro Café & Co", badge: "Café", note: "A big leafy garden patio in San Antonio with its own café dog. Great for a long coffee with a dog at your feet.", mapQuery: "Tierradentro Café & Co, Cra. 12 #2-81, Cali, Colombia" },
{ name: "Café Valparaíso Pance", badge: "Café", note: "Mostly outdoor seating under the trees by a pond in Pance, with a pet-friendly terrace. Worth the drive south on a weekend.", mapQuery: "Café Valparaiso Pance, Cra. 125 #23 A 58, Cali, Colombia" },
{ name: "Bulevar del Río", badge: "Walk", note: "The pedestrian riverside boulevard downtown, wide, shaded, and easy for a leashed walk, with the Gato del Río sculptures a short stroll north.", mapQuery: "Bulevar del Rio, Cali, Colombia" },
],
},
"Puerto López": {
flag: "🇪🇨",
spots: [
{ name: "Playa de Puerto López and the malecón", badge: "Beach", note: "Wide sand, fishing boats coming in, and cool mornings. Go early with a dog, before the beach and the waterfront restaurants fill up.", mapQuery: "Malecon de Puerto Lopez, Manabi, Ecuador" },
{ name: "Playa de Ayampe", badge: "Beach", note: "Our home base. A quiet surf beach at the end of the road, about ten kilometers south of Puerto López, where Ginger had the ocean at the end of every walk.", mapQuery: "Playa de Ayampe, Manabi, Ecuador" },
{ name: "La Cabaña D'Chuky", badge: "Food", note: "A family-run, open-air seafood spot on the malecón with fresh fish, patacones, and great juices. Open-air, so ask and sit outside with your dog.", mapQuery: "La Cabana D'Chuky, Malecon Julio Izurieta, Puerto Lopez, Ecuador" },
{ name: "Hostería La Terraza", badge: "Stay", note: "Listed as welcoming dogs of any size at no extra fee, with food and water bowls in the room. A solid pick if you need a dog-friendly bed in town.", mapQuery: "Hosteria La Terraza, Puerto Lopez, Ecuador" },
{ name: "Animal Care Puerto López", badge: "Avoid", note: "The clinic that handled Ginger's export certificate. Shifting stories, a surprise charge, and her documents held until I paid. Full story in the journal.", mapQuery: "Animal Care, Puerto Lopez, Manabi, Ecuador" },
],
},
Manta: {
flag: "🇪🇨",
spots: [
{ name: "Playa Santa Marianita", badge: "Beach", note: "A quieter kitesurf beach about fifteen minutes south of Manta, with plenty of space and people who bring their dogs.", mapQuery: "Playa Santa Marianita, Manabi, Ecuador" },
{ name: "Playa El Murciélago", badge: "Beach", note: "Manta's big city beach, with lifeguards, showers, and a malecón full of food. It gets busy fast, so go early with a dog.", mapQuery: "Playa El Murcielago, Manta, Ecuador" },
{ name: "Carbono Resto Café", badge: "Café", note: "Listed as a dog café, with great coffee and food on the San Mateo road. A good stop before a flight out of Manta.", mapQuery: "Carbono Resto Cafe, Conector Via Circunvalacion San Mateo, Manta, Ecuador" },
{ name: "Agrocalidad Manta", badge: "Paperwork", note: "The office where export certificates for this part of the coast get picked up. If you are leaving Ecuador with a pet, you will probably end up here.", mapQuery: "Agrocalidad, Manta, Manabi, Ecuador" },
],
},
Dallas: {
flag: "🇺🇸",
spots: [
{ name: "White Rock Lake Dog Park", badge: "Paw 4.6", note: "Separate areas for large and small dogs, plus direct lake access.", mapQuery: "White Rock Lake Dog Park, 8000 E Mockingbird Ln, Dallas, TX" },
{ name: "NorthBark Dog Park", badge: "Paw 4.5", note: "A 22-acre facility with separate enclosures and a fenced water pond.", mapQuery: "NorthBark Dog Park, 4899 Gramercy Oaks Dr, Dallas, TX" },
{ name: "Bark Park Central", badge: "Paw 3.9", note: "A 1.2-acre off-leash park decorated with vibrant street murals.", mapQuery: "Bark Park Central, 2530 Commerce St, Dallas, TX" },
{ name: "Dallas Farmers Market", badge: "Paw 4.5", note: "Leashed dogs welcome in the open-air pavilion and outdoor patios.", mapQuery: "Dallas Farmers Market, 920 S Harwood St, Dallas, TX" },
{ name: "The Upper Paw", badge: "Paw 4.8", note: "A boutique with premium pet foods, toys, apparel, and bakery treats.", mapQuery: "2809 Commerce St, Dallas, TX" },
{ name: "Uptown Pup Self-Wash", badge: "Paw 4.9", note: "DIY dog-washing stations fully stocked with professional supplies.", mapQuery: "2905 Thomas Ave, Dallas, TX" },
],
},
};

export default function Explore() {
const [activeCity, setActiveCity] = useState("Cali");
const [openMap, setOpenMap] = useState<string | null>(null);
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
onClick={() => { setActiveCity(city); setOpenMap(null); }}
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
{cityData[activeCity].spots.map((p, i) => {
const key = activeCity + "-" + i;
const isOpen = openMap === key;
return (
<div key={i} style={{background:"var(--paper-2)",borderRadius:"14px",padding:"22px"}}>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"}}>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.05rem",maxWidth:"70%"}}>{p.name}</h4>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",background:"var(--paper)",padding:"3px 10px",borderRadius:"100px",whiteSpace:"nowrap"}}>{p.badge}</span>
</div>
<p style={{fontSize:"0.85rem",opacity:0.85,marginBottom:"14px"}}>{p.note}</p>
<button
onClick={() => setOpenMap(isOpen ? null : key)}
style={{background:"none",border:"none",padding:0,cursor:"pointer",fontFamily:"'Space Mono',monospace",fontSize:"0.72rem",color:"var(--terracotta)",fontWeight:600}}
>
{isOpen ? "Hide map ▴" : "View on map ▾"}
</button>
{isOpen && (
<div style={{marginTop:"14px",borderRadius:"10px",overflow:"hidden",height:"220px"}}>
<iframe
src={`https://www.google.com/maps?q=${encodeURIComponent(p.mapQuery)}&output=embed`}
width="100%"
height="100%"
style={{border:0}}
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
title={p.name}
></iframe>
</div>
)}
</div>
);
})}
</div>
</section>
<Footer />
</main>
);
}
