import Link from "next/link";

const interests = [
{ icon: "🐾", label: "Dog Friendly", href: "/pawpass/explore" },
{ icon: "🥊", label: "Combat Sports", href: "/training" },
{ icon: "⛰", label: "Hiking", href: null },
{ icon: "☕", label: "Cafes", href: null },
{ icon: "💻", label: "Remote Work", href: null },
{ icon: "🏖", label: "Beaches", href: null },
{ icon: "⛺", label: "Camping", href: null },
{ icon: "🚂", label: "Train Travel", href: null },
];

export default function InterestGrid() {
return (
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"80px 48px",borderBottom:"1px solid rgba(43,36,32,0.12)"}}>
<div style={{maxWidth:"620px",marginBottom:"44px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Explore by Interest</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"12px"}}>Find your kind of trip.</h2>
<p style={{fontSize:"0.9rem",opacity:0.75}}>Solid ones are live right now. The rest fill in with real guides as we actually experience them, not before.</p>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"16px"}}>
{interests.map((item,i) => (
item.href ? (
<Link key={i} href={item.href} style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--paper-2)",borderRadius:"14px",padding:"24px 16px",textAlign:"center",cursor:"pointer"}}>
<span style={{fontSize:"1.6rem",display:"block",marginBottom:"8px"}}>{item.icon}</span>
<span style={{fontSize:"0.78rem",fontWeight:600}}>{item.label}</span>
</div>
</Link>
) : (
<div key={i} style={{background:"var(--paper-2)",borderRadius:"14px",padding:"24px 16px",textAlign:"center",opacity:0.5,border:"1px dashed var(--line)"}}>
<span style={{fontSize:"1.6rem",display:"block",marginBottom:"8px",filter:"grayscale(1)"}}>{item.icon}</span>
<span style={{fontSize:"0.78rem",fontWeight:600,display:"block",marginBottom:"4px"}}>{item.label}</span>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.55rem",textTransform:"uppercase",letterSpacing:"0.04em"}}>Added as we travel</span>
</div>
)
))}
</div>
</section>
);
}
