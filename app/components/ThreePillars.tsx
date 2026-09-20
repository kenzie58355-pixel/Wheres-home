import Link from "next/link";

export default function ThreePillars() {
return (
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"70px 48px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px",textAlign:"center"}}>Not three projects. One story.</span>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"20px",marginTop:"30px"}}>
<Link href="/training" style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--teal)",color:"#F5EEDF",borderRadius:"18px",padding:"32px",height:"100%"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",textTransform:"uppercase",letterSpacing:"0.06em",opacity:0.8}}>The Athlete</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600,margin:"14px 0"}}>Train anywhere.</h3>
<p style={{fontSize:"0.88rem",opacity:0.85,marginBottom:"20px"}}>From wrestling to MMA, discipline that travels with me, gym to gym, country to country.</p>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem"}}>See the gyms →</span>
</div>
</Link>
<Link href="/why" style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--terracotta)",color:"#F5EEDF",borderRadius:"18px",padding:"32px",height:"100%"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",textTransform:"uppercase",letterSpacing:"0.06em",opacity:0.8}}>The Builder</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600,margin:"14px 0"}}>Build what you wish existed.</h3>
<p style={{fontSize:"0.88rem",opacity:0.85,marginBottom:"20px"}}>MMAatHome, PawPass, and everything else born from not finding the thing I actually needed.</p>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem"}}>Why this exists →</span>
</div>
</Link>
<Link href="/adventure" style={{textDecoration:"none",color:"inherit"}}>
<div style={{background:"var(--apricot)",color:"var(--ink)",borderRadius:"18px",padding:"32px",height:"100%"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",textTransform:"uppercase",letterSpacing:"0.06em",opacity:0.75}}>The Adventurer</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600,margin:"14px 0"}}>Find home wherever you land.</h3>
<p style={{fontSize:"0.88rem",opacity:0.8,marginBottom:"20px"}}>195 countries, one life, no permanent address. The philosophy behind all of it.</p>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem"}}>Read the philosophy →</span>
</div>
</Link>
</div>
</section>
);
}
