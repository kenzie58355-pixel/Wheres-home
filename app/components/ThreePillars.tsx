import Link from "next/link";

const pillars = [
{
tag: "The Athlete",
title: "Train anywhere.",
desc: "Wrestling to MMA, one gym at a time, wherever the map takes it next.",
cta: "Training and Gyms",
href: "/training",
bg: "var(--teal)",
color: "#F5EEDF",
},
{
tag: "The Builder",
title: "Build what you wish existed.",
desc: "MMAatHome and PawPass, both built to solve problems I was actually living.",
cta: "About the Build",
href: "/about",
bg: "var(--terracotta-2)",
color: "#F5EEDF",
},
{
tag: "The Adventurer",
title: "Find home wherever you land.",
desc: "195 countries, one dog, no fixed address. This is the record of that.",
cta: "Read My Story",
href: "/about",
bg: "var(--apricot)",
color: "var(--ink)",
},
];

export default function ThreePillars() {
return (
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"80px 48px",borderBottom:"1px solid rgba(43,36,32,0.12)"}}>
<div style={{maxWidth:"620px",marginBottom:"44px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>One Person, Three Threads</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600}}>Not three projects. One story.</h2>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"20px"}}>
{pillars.map((p, i) => (
<Link key={i} href={p.href} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:p.bg,color:p.color,borderRadius:"18px",padding:"32px",height:"100%",cursor:"pointer"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.68rem",textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.85,display:"block",marginBottom:"14px"}}>{p.tag}</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.4rem",fontWeight:600,marginBottom:"14px"}}>{p.title}</h3>
<p style={{fontSize:"0.88rem",opacity:0.9,marginBottom:"20px",lineHeight:1.6}}>{p.desc}</p>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",borderBottom:`1px solid ${p.color}`,paddingBottom:"2px"}}>{p.cta} →</span>
</div>
</Link>
))}
</div>
</section>
);
}
