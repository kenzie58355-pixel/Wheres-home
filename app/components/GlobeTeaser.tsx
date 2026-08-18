"use client";
import Link from "next/link";

export default function GlobeTeaser() {
return (
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 80px"}}>
<Link href="/pawpass/explore" style={{textDecoration:"none",color:"inherit"}}>
<div style={{
background:"linear-gradient(135deg,var(--teal),var(--terracotta-2))",
borderRadius:"24px",
padding:"56px 48px",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
gap:"32px",
flexWrap:"wrap",
cursor:"pointer",
color:"#F5EEDF",
position:"relative",
overflow:"hidden",
}}>
<div style={{position:"absolute",top:"-40px",right:"-20px",fontSize:"9rem",opacity:0.12,animation:"spin 40s linear infinite"}}>🌎</div>
<div style={{maxWidth:"560px",position:"relative"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",opacity:0.85,display:"block",marginBottom:"12px"}}>The Journey, Live</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.7rem,3.4vw,2.4rem)",fontWeight:600,marginBottom:"14px"}}>Drag the globe. Follow the route.</h2>
<p style={{fontSize:"0.9rem",opacity:0.9}}>An interactive 3D map of everywhere we&apos;ve been, everywhere we&apos;re headed, and everywhere still unknown.</p>
</div>
<span style={{
fontFamily:"'Space Mono',monospace",
fontSize:"0.8rem",
fontWeight:600,
background:"#F5EEDF",
color:"var(--teal)",
padding:"14px 26px",
borderRadius:"100px",
whiteSpace:"nowrap",
position:"relative",
}}>Explore the Globe →</span>
</div>
</Link>
<style>{`
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
`}</style>
</section>
);
}
