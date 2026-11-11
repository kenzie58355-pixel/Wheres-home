"use client";
import { useState, useRef } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CurrentJourney from "../components/CurrentJourney";
import Link from "next/link";

const whatWeDo = [
{ icon: "✈️", title: "Travel & Relocation", desc: "Custom routes, research, logistics and real world assistance for people figuring out their next move." },
{ icon: "🐾", title: "Pet Relocation", desc: "Because your dog shouldn't have to stay behind. Help navigating pet travel, transportation, stays, requirements and the logistics nobody puts in the cute travel videos." },
{ icon: "🗺️", title: "Custom Itineraries", desc: "Tell us where you're going, your budget, and what matters to you. We'll build the route." },
{ icon: "🏡", title: "Pet Friendly Stays", desc: "Hotels, hostels and destinations that don't just tolerate pets. They welcome them." },
{ icon: "📸", title: "Destination & UGC", desc: "Authentic travel content, photography, storytelling and experiences created on the road." },
{ icon: "🤝", title: "Collaborations", desc: "For brands, hotels, destinations, tourism companies, pet businesses and anyone with an idea that belongs in the journey." },
];

const packages = [
{
group: "Pet Relocation",
icon: "\u{1F43E}",
note: "For anyone moving countries with a dog and trying not to lose their mind over paperwork.",
items: [
{ name: "Quick Call", price: "$45", unit: "one time", points: ["45-minute video call about your route", "Written checklist sent after the call", "What to ask your vet, and when"] },
{ name: "Full Paperwork Plan", price: "$150", unit: "one time", points: ["Step-by-step timeline for your exact route", "Every document and vet step, in order", "Airline rules for flying with your dog", "Ready-to-send Spanish messages for vets", "WhatsApp support until you fly"] },
],
},
{
group: "Custom Itineraries",
icon: "\u{1F5FA}\u{FE0F}",
note: "Built from real travel, with your budget, your pace, and your dog in mind.",
items: [
{ name: "Custom Itinerary", price: "$30", unit: "per day, 3-day minimum", points: ["Day-by-day plan for your trip", "Dog-friendly stays and spots included", "Budget and getting-around notes", "One round of changes", "Weekend $90, full week $210"] },
],
},
{
group: "UGC for Brands",
icon: "\u{1F4F8}",
note: "Real travel content from the road, made for brands that fit the journey.",
items: [
{ name: "Single Video", price: "$175", unit: "per video", points: ["One short-form video", "One round of revisions", "Use on your brand's own social pages"] },
{ name: "3-Video Bundle", price: "$450", unit: "3 videos", points: ["Three short-form videos", "One round of revisions each", "Paid ad usage +30%", "Raw footage +$50"] },
],
},
];

export default function WorkWithUs() {
const [selected, setSelected] = useState<string | null>(null);
const formRef = useRef<HTMLDivElement>(null);

const pickService = (title: string) => {
setSelected(title);
formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
};

return (
<main>
<Nav />
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0"}}>
<CurrentJourney />
</div>
<section style={{background:"linear-gradient(135deg,var(--terracotta),var(--stamp-red))",color:"#F5EEDF",borderRadius:"20px",margin:"20px 24px 0",padding:"110px 48px",textAlign:"center"}}>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2.6rem,6.5vw,4.6rem)",fontWeight:600,maxWidth:"780px",margin:"0 auto",lineHeight:1.08}}>You have somewhere to go.<br/>We&apos;ll help you get there.</h1>
</section>

<section style={{maxWidth:"760px",margin:"0 auto",padding:"80px 48px 20px",textAlign:"center"}}>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.85,marginBottom:"8px"}}>Where&apos;s Home is bigger than travel content.</p>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.85}}>It&apos;s a travel, relocation, and adventure platform built for people, pets, destinations, and brands ready for their next move.</p>
</section>

<section style={{maxWidth:"700px",margin:"0 auto",padding:"40px 48px",textAlign:"center"}}>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.4rem,2.8vw,1.8rem)",fontWeight:600,marginBottom:"10px"}}>Moving abroad?</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.4rem,2.8vw,1.8rem)",fontWeight:600,marginBottom:"10px"}}>Taking your dog?</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.4rem,2.8vw,1.8rem)",fontWeight:600,marginBottom:"10px"}}>Planning a complicated trip?</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.4rem,2.8vw,1.8rem)",fontWeight:600,marginBottom:"26px"}}>Looking for the right people to discover your destination?</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3.2vw,2.2rem)",fontWeight:600,color:"var(--terracotta)"}}>Let&apos;s build it.</p>
</section>

<section style={{maxWidth:"1200px",margin:"70px auto 10px",padding:"0 48px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--terracotta)"}}>What We Do</span>
<p style={{fontSize:"0.85rem",opacity:0.6,marginTop:"10px"}}>Tap the one that fits, we&apos;ll pre-fill it below.</p>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 90px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"20px"}}>
{whatWeDo.map((w, i) => {
const isSelected = selected === w.title;
return (
<button
key={i}
onClick={() => pickService(w.title)}
style={{
background: isSelected ? "var(--terracotta)" : "var(--paper-2)",
color: isSelected ? "#F5EEDF" : "var(--ink)",
borderRadius: "18px",
padding: "32px",
textAlign: "left",
border: isSelected ? "2px solid var(--terracotta)" : "2px solid transparent",
cursor: "pointer",
transition: "transform 0.15s ease, background 0.2s ease",
transform: isSelected ? "translateY(-4px)" : "none",
boxShadow: isSelected ? "0 12px 24px rgba(181,82,46,0.25)" : "none",
}}
>
<span style={{fontSize:"2rem",display:"block",marginBottom:"16px"}}>{w.icon}</span>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.2rem",marginBottom:"10px"}}>{w.title}</h4>
<p style={{fontSize:"0.88rem",opacity:isSelected?0.95:0.8,lineHeight:1.6,marginBottom:"14px"}}>{w.desc}</p>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.72rem",fontWeight:600}}>
{isSelected ? "✓ Selected, scroll down →" : "Tap to inquire →"}
</span>
</button>
);
})}
</div>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
<div style={{textAlign:"center",marginBottom:"40px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--terracotta)"}}>Packages and Pricing</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.6vw,2.6rem)",fontWeight:600,marginTop:"12px"}}>Clear prices. No surprise fees.</h2>
<p style={{opacity:0.75,marginTop:"10px",maxWidth:"560px",marginLeft:"auto",marginRight:"auto"}}>Learned the hard way in Ecuador. What you see here is what you pay.</p>
</div>
{packages.map((g, gi) => (
<div key={gi} style={{marginBottom:"44px"}}>
<div style={{display:"flex",alignItems:"baseline",gap:"12px",flexWrap:"wrap",marginBottom:"18px"}}>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600}}>{g.icon} {g.group}</h3>
<span style={{fontSize:"0.88rem",opacity:0.7}}>{g.note}</span>
{g.group === "Custom Itineraries" && <Link href="/itineraries" style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",color:"var(--terracotta)",fontWeight:700,textDecoration:"none"}}>See sample itineraries {"\u2192"}</Link>}
{g.group === "Pet Relocation" && <Link href="/ecuador-dog-checklist" style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",color:"var(--terracotta)",fontWeight:700,textDecoration:"none"}}>Free Ecuador checklist {"\u2192"}</Link>}
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"20px"}}>
{g.items.map((it, ii) => (
<div key={ii} style={{background:"var(--paper-2)",borderRadius:"18px",padding:"30px",display:"flex",flexDirection:"column"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.06em",opacity:0.7}}>{it.name}</span>
<div style={{display:"flex",alignItems:"baseline",gap:"8px",margin:"10px 0 18px"}}>
<span style={{fontFamily:"'Fraunces',serif",fontSize:"2.4rem",fontWeight:600,color:"var(--terracotta)"}}>{it.price}</span>
<span style={{fontSize:"0.8rem",opacity:0.7}}>{it.unit}</span>
</div>
<ul style={{listStyle:"none",padding:0,margin:"0 0 24px",display:"flex",flexDirection:"column",gap:"8px",fontSize:"0.9rem",flexGrow:1}}>
{it.points.map((pt, pi) => (
<li key={pi} style={{display:"flex",gap:"8px"}}><span style={{color:"var(--terracotta)"}}>{"\u2713"}</span><span>{pt}</span></li>
))}
</ul>
<button onClick={() => pickService(g.group + ": " + it.name + " (" + it.price + ")")} style={{background:"var(--ink)",color:"var(--paper)",padding:"14px",borderRadius:"100px",border:"none",fontWeight:600,fontSize:"0.85rem",cursor:"pointer"}}>{"Book this \u2192"}</button>
</div>
))}
</div>
</div>
))}
<div style={{background:"var(--apricot)",borderRadius:"18px",padding:"32px",marginTop:"10px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",display:"block",marginBottom:"14px"}}>How booking works</span>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"18px",fontSize:"0.92rem"}}>
<div><strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem",display:"block",marginBottom:"4px"}}>1. Tap Book this</strong>Fill in the form below with your plan.</div>
<div><strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem",display:"block",marginBottom:"4px"}}>2. Get a PayPal invoice</strong>Calls and paperwork plans are paid upfront. Itineraries and UGC are 50% upfront.</div>
<div><strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem",display:"block",marginBottom:"4px"}}>3. We get to work</strong>You hear back within 48 hours to schedule or start.</div>
</div>
</div>
<p style={{fontSize:"0.75rem",opacity:0.6,marginTop:"18px",lineHeight:1.6,maxWidth:"760px"}}>Pet relocation help is guidance based on real experience moving a dog between countries, not veterinary or legal advice. Entry rules change often, so always confirm requirements with the official authorities, your airline, and a registered vet before you travel.</p>
</section>

<section style={{background:"var(--teal)",color:"#F5EEDF",borderRadius:"20px",margin:"0 24px",padding:"90px 48px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",opacity:0.8,letterSpacing:"0.1em",display:"block",marginBottom:"24px"}}>WHY US?</span>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3.2vw,2.2rem)",fontWeight:600,marginBottom:"10px"}}>Because we&apos;re not sitting at home planning someone else&apos;s adventure.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.6vw,2.6rem)",fontWeight:600,color:"var(--apricot)",marginBottom:"34px"}}>We&apos;re living it.</p>
<div style={{display:"flex",flexDirection:"column",gap:"8px",opacity:0.9,fontSize:"1rem",marginBottom:"34px"}}>
<span>Crossing borders with a dog.</span>
<span>Finding MMA gyms in new countries.</span>
<span>Figuring out flights, buses, housing and budgets.</span>
<span>Building businesses from the road.</span>
<span>And documenting all of it.</span>
</div>
<p style={{fontSize:"1.1rem",opacity:0.85,marginBottom:"4px"}}>You don&apos;t just get content.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.4rem",fontWeight:600,color:"var(--apricot)"}}>You become part of the story.</p>
</section>

<section style={{maxWidth:"1000px",margin:"90px auto 0",padding:"0 48px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--terracotta)"}}>The Numbers</span>
</section>
<section style={{maxWidth:"1000px",margin:"30px auto 90px",padding:"0 48px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"24px",textAlign:"center"}}>
<div>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"2.6rem",fontWeight:600,color:"var(--terracotta)"}}>163.7K</div>
<div style={{fontSize:"0.78rem",opacity:0.7}}>Views in the last 30 days</div>
</div>
<div>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"2.6rem",fontWeight:600,color:"var(--terracotta)"}}>20K+</div>
<div style={{fontSize:"0.78rem",opacity:0.7}}>Likes on a single post</div>
</div>
<div>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"2.6rem",fontWeight:600,color:"var(--terracotta)"}}>3</div>
<div style={{fontSize:"0.78rem",opacity:0.7}}>Active platforms</div>
</div>
</div>
<p style={{textAlign:"center",fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:"1.1rem",opacity:0.75,marginTop:"30px"}}>And we&apos;re just getting started.</p>
</section>

<section style={{maxWidth:"700px",margin:"0 auto",padding:"20px 48px 60px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--terracotta)",display:"block",marginBottom:"24px"}}>Have a Plan?</span>
<div style={{display:"flex",flexDirection:"column",gap:"6px",fontFamily:"'Fraunces',serif",fontSize:"1.3rem",fontWeight:600,marginBottom:"24px"}}>
<span>A move.</span>
<span>A dog.</span>
<span>A destination.</span>
<span>A business.</span>
<span>A product.</span>
<span>A story.</span>
</div>
<p style={{fontSize:"1.05rem",opacity:0.85,marginBottom:"4px"}}>Bring it to us.</p>
<p style={{fontSize:"1.05rem",opacity:0.85}}>We&apos;ll figure out what&apos;s possible.</p>
</section>

<section ref={formRef} style={{background:"var(--ink)",color:"var(--paper)",borderRadius:"20px",margin:"0 24px 90px",padding:"90px 48px",textAlign:"center"}}>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2.2rem,5vw,3.4rem)",fontWeight:600,marginBottom:"8px"}}>Where&apos;s Home?</h2>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3.4vw,2.2rem)",fontWeight:600,color:"var(--apricot)",marginBottom:"30px"}}>Let&apos;s find out.</p>

{selected && (
<div style={{display:"inline-flex",alignItems:"center",gap:"10px",background:"rgba(232,162,93,0.15)",border:"1px solid var(--apricot)",padding:"10px 20px",borderRadius:"100px",marginBottom:"30px"}}>
<span style={{fontSize:"0.85rem"}}>Inquiring about: <strong style={{color:"var(--apricot)"}}>{selected}</strong></span>
<span onClick={() => setSelected(null)} style={{cursor:"pointer",opacity:0.6,fontSize:"0.85rem"}}>✕</span>
</div>
)}

<form action="https://formspree.io/f/xyezjlyg" method="POST" style={{maxWidth:"460px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"14px",textAlign:"left"}}>
<input type="hidden" name="service" value={selected || "Not specified"} />
<input type="text" name="name" placeholder="Your name" required style={{padding:"14px 18px",borderRadius:"12px",border:"none",fontFamily:"'Inter',sans-serif",fontSize:"0.9rem"}} />
<input type="email" name="email" placeholder="Email" required style={{padding:"14px 18px",borderRadius:"12px",border:"none",fontFamily:"'Inter',sans-serif",fontSize:"0.9rem"}} />
<textarea name="message" placeholder="Tell us the plan" rows={4} style={{padding:"14px 18px",borderRadius:"12px",border:"none",fontFamily:"'Inter',sans-serif",fontSize:"0.9rem",resize:"vertical"}}></textarea>
<button type="submit" style={{background:"var(--apricot)",color:"var(--ink)",padding:"16px",borderRadius:"100px",border:"none",fontWeight:700,fontSize:"0.95rem",cursor:"pointer",marginTop:"6px"}}>Send It</button>
</form>
</section>
<Footer />
</main>
);
}
