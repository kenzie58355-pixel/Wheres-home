import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { itineraries } from "../../data/itineraries";

export function generateStaticParams() {
  return itineraries.map((it) => ({ slug: it.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const it = itineraries.find((i) => i.slug === slug);
  if (!it) return {};
  return {
    title: it.seoTitle + " | Where's Home?",
    description: it.seoDescription,
    openGraph: { title: it.seoTitle, description: it.seoDescription },
  };
}

const slot = { fontFamily: "'Space Mono',monospace", fontSize: "0.65rem", textTransform: "uppercase" as const, letterSpacing: "0.06em", color: "var(--terracotta)", display: "block", marginBottom: "4px" };

export default async function ItineraryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const it = itineraries.find((i) => i.slug === slug);
  if (!it) return notFound();

  return (
    <main>
      <Nav />
      <div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0",fontSize:"0.8rem",opacity:0.7}}>
        <Link href="/" style={{color:"var(--ink)",textDecoration:"none"}}>Where&apos;s Home</Link> / <Link href="/itineraries" style={{color:"var(--ink)",textDecoration:"none"}}>Itineraries</Link> / {it.title}
      </div>
      <section style={{background:it.heroGradient,borderRadius:"20px",margin:"20px 24px 0",padding:"90px 48px 60px",color:"#F7F2E7"}}>
        <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",opacity:0.9}}>{it.flag} {it.place}</span>
        <h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2.2rem,5.5vw,3.8rem)",fontWeight:600,marginTop:"10px",marginBottom:"20px",maxWidth:"820px",lineHeight:1.05}}>{it.title}</h1>
        <div style={{display:"flex",gap:"40px",flexWrap:"wrap",fontSize:"0.85rem"}}>
          <div><strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",display:"block"}}>{it.length}</strong>Length</div>
          <div style={{maxWidth:"360px"}}><strong style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",display:"block"}}>Best for</strong>{it.bestFor}</div>
        </div>
      </section>

      <section style={{maxWidth:"760px",margin:"0 auto",padding:"60px 48px 30px"}}>
        <p style={{fontSize:"1.08rem",lineHeight:1.8,opacity:0.88}}>{it.intro}</p>
      </section>

      <section style={{maxWidth:"900px",margin:"0 auto",padding:"0 48px 50px",display:"flex",flexDirection:"column",gap:"22px"}}>
        {it.days.map((d, i) => (
          <div key={i} style={{background:"var(--paper-2)",borderRadius:"18px",padding:"30px"}}>
            <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",opacity:0.7}}>{d.label}</span>
            <h2 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600,margin:"6px 0 18px"}}>{d.title}</h2>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"18px",fontSize:"0.92rem",lineHeight:1.65}}>
              <div><span style={slot}>Morning</span>{d.morning}</div>
              <div><span style={slot}>Afternoon</span>{d.afternoon}</div>
              <div><span style={slot}>Evening</span>{d.evening}</div>
            </div>
          </div>
        ))}
      </section>

      <section style={{maxWidth:"900px",margin:"0 auto",padding:"0 48px 50px"}}>
        <div style={{background:"var(--teal)",color:"#F5EEDF",borderRadius:"18px",padding:"34px"}}>
          <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--apricot)",display:"block",marginBottom:"16px"}}>Traveling with a dog here</span>
          <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"12px",fontSize:"0.95rem",lineHeight:1.6}}>
            {it.tips.map((t, i) => (
              <li key={i} style={{display:"flex",gap:"10px"}}><span style={{color:"var(--apricot)"}}>{"\u2713"}</span><span>{t}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{maxWidth:"900px",margin:"0 auto",padding:"0 48px 90px"}}>
        <div style={{background:"var(--apricot)",borderRadius:"18px",padding:"36px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"20px"}}>
          <div style={{maxWidth:"460px"}}>
            <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.06em"}}>Want one built for your trip?</span>
            <h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",marginTop:"6px"}}>Custom itineraries, $30 per day.</h3>
            <p style={{fontSize:"0.88rem",opacity:0.8,marginTop:"6px"}}>Your dates, your budget, your dog. Dog-friendly stays and spots included.</p>
          </div>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/work-with-us" style={{background:"var(--ink)",color:"var(--paper)",padding:"14px 26px",borderRadius:"100px",fontWeight:600,fontSize:"0.9rem",textDecoration:"none"}}>Book a custom plan</Link>
            <Link href={"/destinations/" + it.destination} style={{border:"1.5px solid var(--ink)",color:"var(--ink)",padding:"14px 26px",borderRadius:"100px",fontWeight:600,fontSize:"0.9rem",textDecoration:"none"}}>Full city guide</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
