"use client";
import Link from "next/link";
import { useState } from "react";
import { episodes } from "../vlog/data";
import { entries } from "../journal/data";

export default function Nav() {
const [openMenu, setOpenMenu] = useState<string | null>(null);
const [mobileOpen, setMobileOpen] = useState(false);
const now = new Date();
const nextEpisode = episodes.filter((e) => new Date(e.dropDate + "T12:00:00") > now).sort((a, b) => a.dropDate.localeCompare(b.dropDate))[0];
const latestEntry = entries.find((e) => e.slug === "the-vet-who-held-gingers-papers") || entries[0];
const fmt = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const mLink = {display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"1.05rem",padding:"10px 0",borderBottom:"1px solid rgba(43,36,32,0.08)"};
const mHead = {fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase" as const,letterSpacing:"0.06em",display:"block",margin:"18px 0 4px"};

const toggle = (menu: string) => {
setOpenMenu(openMenu === menu ? null : menu);
};

return (
<div style={{position:"relative"}}>
<nav className="site-nav" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"22px 48px",maxWidth:"1200px",margin:"0 auto"}}>
<Link href="/" style={{fontFamily:"'Fraunces',serif",fontWeight:600,fontSize:"1.05rem",color:"var(--ink)",textDecoration:"none"}}>Where's Home?</Link>
<button className="nav-burger" aria-label="Menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} style={{background:"none",border:"1.5px solid var(--ink)",borderRadius:"100px",padding:"8px 16px",fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",color:"var(--ink)",cursor:"pointer"}}>{mobileOpen ? "Close" : "Menu"}</button>
<div className="nav-links" style={{display:"flex",gap:"24px",fontSize:"0.85rem",alignItems:"center"}}>
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
{mobileOpen && (
<div className="nav-mobile" style={{background:"var(--paper-2)",padding:"10px 20px 28px",borderTop:"1px solid rgba(43,36,32,0.12)",borderBottom:"1px solid rgba(43,36,32,0.12)"}}>
<Link href="/work-with-us" onClick={() => setMobileOpen(false)} style={{display:"block",background:"var(--ink)",color:"var(--paper)",textAlign:"center",padding:"14px",borderRadius:"100px",fontWeight:600,textDecoration:"none",margin:"12px 0 6px"}}>Work With Us</Link>
<span style={mHead}>Explore</span>
<Link href="/destinations" onClick={() => setMobileOpen(false)} style={mLink}>Destinations</Link>
<Link href="/itineraries" onClick={() => setMobileOpen(false)} style={mLink}>Sample Itineraries</Link>
<Link href="/pawpass/explore" onClick={() => setMobileOpen(false)} style={mLink}>Dog Friendly Spots</Link>
<Link href="/ecuador-dog-checklist" onClick={() => setMobileOpen(false)} style={mLink}>Free Ecuador Dog Checklist</Link>
<span style={mHead}>Stories</span>
<Link href="/journal" onClick={() => setMobileOpen(false)} style={mLink}>Journal</Link>
<Link href="/vlog" onClick={() => setMobileOpen(false)} style={mLink}>Vlog</Link>
<span style={mHead}>About</span>
<Link href="/pawpass" onClick={() => setMobileOpen(false)} style={mLink}>PawPass</Link>
<Link href="/ginger" onClick={() => setMobileOpen(false)} style={mLink}>Meet Ginger</Link>
<Link href="/about" onClick={() => setMobileOpen(false)} style={{...mLink,borderBottom:"none"}}>About</Link>
</div>
)}

{openMenu === "destinations" && (
<div style={{background:"var(--paper-2)",borderTop:"1px solid rgba(43,36,32,0.12)",borderBottom:"1px solid rgba(43,36,32,0.12)",padding:"36px 48px"}}>
<div style={{maxWidth:"1200px",margin:"0 auto",display:"flex",gap:"50px",flexWrap:"wrap"}}>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:"14px"}}>Browse</span>
<Link href="/destinations" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.95rem",fontWeight:600,marginBottom:"10px"}}>All Destinations</Link>
<Link href="/destinations/cali" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8,marginBottom:"8px"}}>Cali, Colombia</Link>
<Link href="/destinations/manta" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8}}>Puerto López & Manta</Link>
</div>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:"14px"}}>By Interest</span>
<Link href="/training" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8,marginBottom:"8px"}}>Training and Gyms</Link>
<Link href="/pawpass/explore" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8,marginBottom:"8px"}}>Dog Friendly Spots</Link>
<Link href="/itineraries" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8,marginBottom:"8px"}}>Sample Itineraries</Link>
<Link href="/ecuador-dog-checklist" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8}}>Free Ecuador Dog Checklist</Link>
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
<Link href="/journal?category=cali" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8,marginBottom:"8px"}}>Cali</Link>
<Link href="/journal?category=ginger" onClick={() => setOpenMenu(null)} style={{display:"block",color:"var(--ink)",textDecoration:"none",fontSize:"0.9rem",opacity:0.8}}>Ginger</Link>
</div>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:"14px"}}>Latest</span>
<Link href={"/journal/" + latestEntry.slug} onClick={() => setOpenMenu(null)} style={{display:"block",fontSize:"0.9rem",marginBottom:"6px",color:"var(--ink)",textDecoration:"none",maxWidth:"320px"}}>{latestEntry.title}</Link>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6}}>{latestEntry.date}</span>
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
<span style={{display:"block",fontSize:"0.9rem",opacity:0.7}}>New episode every Friday</span>
</div>
<div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6,textTransform:"uppercase",letterSpacing:"0.06em",display:"block",marginBottom:"14px"}}>{nextEpisode ? "Up Next" : "Latest"}</span>
{nextEpisode ? (
<>
<Link href={"/vlog/" + nextEpisode.slug} onClick={() => setOpenMenu(null)} style={{display:"block",fontSize:"0.9rem",marginBottom:"6px",color:"var(--ink)",textDecoration:"none"}}>{nextEpisode.title}</Link>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.6}}>Drops {fmt(nextEpisode.dropDate)}</span>
</>
) : (
<Link href="/vlog" onClick={() => setOpenMenu(null)} style={{display:"block",fontSize:"0.9rem",color:"var(--ink)",textDecoration:"none"}}>See all episodes</Link>
)}
</div>
</div>
</div>
)}
</div>
);
}
