import Link from "next/link";

export default function Footer() {
return (
<footer style={{ background: "var(--ink)", color: "var(--paper)", padding: "80px 32px 40px" }}>
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "flex-start",
flexWrap: "wrap",
gap: "40px",
marginBottom: "60px",
}}
>
<div style={{maxWidth:"340px"}}>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",marginBottom:"10px"}}>Join the journey.</h4>
<p style={{fontSize:"0.85rem",opacity:0.7,marginBottom:"18px"}}>Thousands of adventurous travelers exploring the world with their dogs.</p>
<a href="https://beacons.ai/mmaathome" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"var(--apricot)",color:"var(--ink)",padding:"12px 24px",borderRadius:"100px",fontWeight:600,fontSize:"0.85rem",textDecoration:"none"}}>Subscribe on Beacons</a>
</div>

<div
style={{
width: "110px",
height: "110px",
borderRadius: "50%",
border: "2px dashed var(--apricot)",
display: "flex",
alignItems: "center",
justifyContent: "center",
textAlign: "center",
transform: "rotate(-8deg)",
fontFamily: "'Space Mono', monospace",
fontSize: "0.6rem",
color: "var(--apricot)",
lineHeight: 1.5,
letterSpacing: "0.08em",
flexShrink: 0,
}}
>
MMAATHOME<br />× PAWPASS<br />EST. 2026
</div>

<div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
<div>
<h4 style={{fontFamily:"'Space Mono', monospace",fontSize:"0.7rem",opacity:0.6,marginBottom:"14px",textTransform:"uppercase",letterSpacing:"0.08em"}}>Explore</h4>
<Link href="/vlog" style={{display:"block",fontSize:"0.9rem",marginBottom:"10px",opacity:0.9,color:"inherit",textDecoration:"none"}}>Vlog</Link>
<Link href="/destinations" style={{display:"block",fontSize:"0.9rem",marginBottom:"10px",opacity:0.9,color:"inherit",textDecoration:"none"}}>Destinations</Link>
<Link href="/journal" style={{display:"block",fontSize:"0.9rem",marginBottom:"10px",opacity:0.9,color:"inherit",textDecoration:"none"}}>Journal</Link>
<Link href="/pawpass" style={{display:"block",fontSize:"0.9rem",marginBottom:"10px",opacity:0.9,color:"inherit",textDecoration:"none"}}>PawPass</Link>
<Link href="/about" style={{display:"block",fontSize:"0.9rem",opacity:0.9,color:"inherit",textDecoration:"none"}}>About</Link>
</div>
<div>
<h4 style={{fontFamily:"'Space Mono', monospace",fontSize:"0.7rem",opacity:0.6,marginBottom:"14px",textTransform:"uppercase",letterSpacing:"0.08em"}}>Shop</h4>
<a href="https://beacons.ai/mmaathome" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:"0.9rem",marginBottom:"10px",opacity:0.9,color:"inherit",textDecoration:"none"}}>Transformation Journal</a>
<span style={{display:"block",fontSize:"0.9rem",marginBottom:"10px",opacity:0.55}}>MMAatHome App (Aug 22)</span>
<span style={{display:"block",fontSize:"0.9rem",opacity:0.55}}>Merch Drop (Aug 18)</span>
</div>
<div>
<h4 style={{fontFamily:"'Space Mono', monospace",fontSize:"0.7rem",opacity:0.6,marginBottom:"14px",textTransform:"uppercase",letterSpacing:"0.08em"}}>Follow</h4>
<a href="https://www.tiktok.com/@noplanbkenzie" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:"0.9rem",marginBottom:"10px",opacity:0.9,color:"inherit",textDecoration:"none"}}>TikTok, Kenzie</a>
<a href="https://www.tiktok.com/@sipofgingerale" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:"0.9rem",marginBottom:"10px",opacity:0.9,color:"inherit",textDecoration:"none"}}>TikTok, Ginger</a>
<a href="https://www.instagram.com/mmaathome" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:"0.9rem",marginBottom:"10px",opacity:0.9,color:"inherit",textDecoration:"none"}}>Instagram</a>
<a href="https://www.youtube.com/@MMAatHome-Kenzie" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:"0.9rem",opacity:0.9,color:"inherit",textDecoration:"none"}}>YouTube</a>
</div>
</div>
</div>

<div
style={{
borderTop: "1px solid rgba(245,238,223,0.15)",
paddingTop: "24px",
display: "flex",
justifyContent: "space-between",
fontSize: "0.75rem",
opacity: 0.55,
flexWrap: "wrap",
gap: "10px",
}}
>
<span>© 2026 Where&apos;s Home? — Built with discipline.</span>
<span>Currently: La Paz, Bolivia</span>
</div>
</footer>
);
}
