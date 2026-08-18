"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
const [openMenu, setOpenMenu] = useState<string | null>(null);

const toggle = (menu: string) => {
setOpenMenu(openMenu === menu ? null : menu);
};

return (
<div style={{position:"relative"}}>
<nav style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"22px 48px",maxWidth:"1200px",margin:"0 auto"}}>
<Link href="/" style={{fontFamily:"'Fraunces',serif",fontWeight:600,fontSize:"1.05rem",color:"var(--ink)",textDecoration:"none"}}>Where's Home?</Link>
<div style={{display:"flex",gap:"24px",fontSize:"0.85rem",alignItems:"center"}}>
<button onClick={() => toggle("destinations")} style={{background:"none",border:"none",color:"var(--ink)",opacity:0.8,fontFamily:"'Inter',sans-serif",fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",padding:0}}>
Destinations {openMenu === "destinations" ? "▴" : "▾"}
</button>
<button onClick={() => toggle("journal")} style={{background:"none",border:"none",color:"var(--ink)",opacity:0.8,fontFamily:"'Inter',sans-serif",fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",padding:0}}>
Journal {openMenu === "journal" ? "▴" : "▾"}
</button>
<button onClick={() => toggle("vlog")} style={{background:"none",border:"none",color:"var(--ink)",opacity:0.8,fontFamily:"'Inter',sans-serif",fontSize:"0.85rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"4px",padding:0}}>
Vlog {openMenu === "vlog" ? "▴" : "▾"}
</button>
<Link href="/pawpass" style={{color:"var(--ink)",textDecoration:"none",opacity:0.8}}>PawPass</Link>
<Link href="/ginger" style={{color:"var(--ink)",textDecoration:"none",opacity:0.8}}>Meet Ginger</Link>
<Link href="/about" style={{color:"var(--ink)",textDecoration:"none",opacity:0.8}}>About</Link>
<Link href="/work-with-us" style={{color:"var(--ink)",textDecoration:"none",opacity:0.8}}>Work With Us</Link>
</div>
</nav>

{openMenu === "destinations" && (
<div style={{background:"var(--paper-2)",borderTop:"1px solid rgba(43,36,32,0.12)",borderBottom:"1px solid rgba(43,36,32,0.12)",padding:"36px 48px"}}>
<div style={{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"50px",flexWrap:"wrap"}}>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:"14px"}}>Browse</span>
<Link href="/destinations" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.95rem",fontWeight:600,marginBottom:"10px"}}>All Destinations</Link>
<Link href="/destinations/la-paz" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8}}>La Paz, Bolivia</Link>
</div>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:"14px"}}>By Interest</span>
<Link href="/training" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8,marginBottom:"8px"}}>Training and Gyms</Link>
<Link href="/pawpass/explore" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8}}>Dog Friendly Spots</Link>
</div>
</div>
</div>
)}

{openMenu === "journal" && (
<div style={{background:"var(--paper-2)",borderTop:"1px solid rgba(43,36,32,0.12)",borderBottom:"1px solid rgba(43,36,32,0.12)",padding:"36px 48px"}}>
<div style={{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"50px",flexWrap:"wrap"}}>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:"14px"}}>Browse</span>
<Link href="/journal" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.95rem",fontWeight:600,marginBottom:"10px"}}>All Entries</Link>
<Link href="/journal?category=la-paz" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8,marginBottom:"8px"}}>La Paz</Link>
<Link href="/journal?category=training" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8,marginBottom:"8px"}}>Training</Link>
<Link href="/journal?category=ginger" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8}}>Ginger</Link>
</div>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:"14px"}}>Latest</span>
<span style={{display:"block",fontSize:"0.9rem",marginBottom:"6px"}}>Why I stopped waiting for the right time</span>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6}}>April 3, 2026</span>
</div>
</div>
</div>
)}

{openMenu === "vlog" && (
<div style={{background:"var(--paper-2)",borderTop:"1px solid rgba(43,36,32,0.12)",borderBottom:"1px solid rgba(43,36,32,0.12)",padding:"36px 48px"}}>
<div style={{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"50px",flexWrap:"wrap"}}>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:"14px"}}>Browse</span>
<Link href="/vlog" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.95rem",fontWeight:600,marginBottom:"10px"}}>All Episodes</Link>
<span style={{display:"block",fontSize:"0.9rem",opacity:0.7}}>New episode every 3 days</span>
</div>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:"14px"}}>Latest</span>
<span style={{display:"block",fontSize:"0.9rem",marginBottom:"6px"}}>First sparring session in La Paz</span>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6}}>Drops Aug 28, 2026</span>
</div>
</div>
</div>
)}
</div>
);
}
