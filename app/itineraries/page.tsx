import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { itineraries } from "../data/itineraries";

export const metadata: Metadata = {
  title: "Dog-Friendly Travel Itineraries | Where's Home?",
  description: "Sample dog-friendly itineraries for Cali, Colombia and the Ecuador coast, built from real travel with a standard poodle. Want one for your trip? Custom itineraries from $30 a day.",
};

export default function Itineraries() {
  return (
    <main>
      <Nav />
      <section style={{maxWidth:"1200px",margin:"0 auto",padding:"70px 48px 40px"}}>
        <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Sample Itineraries</span>
        <h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>Trips built for you, and your dog.</h1>
        <p style={{marginTop:"14px",opacity:0.8,maxWidth:"560px"}}>Every plan here comes from places we actually lived with Ginger. Use them for free, or get one built around your dates, budget, and dog.</p>
      </section>
      <section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 60px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"24px"}}>
          {itineraries.map((it) => (
            <Link key={it.slug} href={"/itineraries/" + it.slug} style={{textDecoration:"none",color:"inherit"}}>
              <div style={{background:"var(--paper-2)",borderRadius:"18px",overflow:"hidden"}}>
                <div style={{height:"180px",background:it.heroGradient,display:"flex",alignItems:"flex-end",padding:"22px"}}>
                  <span style={{background:"rgba(247,242,231,0.92)",padding:"6px 14px",borderRadius:"100px",fontFamily:"'Space Mono',monospace",fontSize:"0.7rem"}}>{it.length}</span>
                </div>
                <div style={{padding:"24px"}}>
                  <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.65rem",opacity:0.7,display:"block",marginBottom:"8px"}}>{it.flag} {it.place}</span>
                  <h2 style={{fontFamily:"'Fraunces',serif",fontSize:"1.4rem",fontWeight:600,marginBottom:"8px"}}>{it.title}</h2>
                  <span style={{fontSize:"0.85rem",opacity:0.75}}>Best for: {it.bestFor}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
        <div style={{background:"var(--apricot)",borderRadius:"18px",padding:"36px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"}}>
          <div>
            <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.06em"}}>Custom Itineraries</span>
            <h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",marginTop:"6px"}}>Want one built for your trip? $30 per day.</h3>
          </div>
          <Link href="/work-with-us" style={{background:"var(--ink)",color:"var(--paper)",padding:"14px 26px",borderRadius:"100px",fontWeight:600,fontSize:"0.9rem",textDecoration:"none"}}>See packages</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
