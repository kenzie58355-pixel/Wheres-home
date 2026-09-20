import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CurrentJourney from "../components/CurrentJourney";
import Link from "next/link";
import { journey } from "../data/journey";

export default function Adventure() {
return (
<main>
<Nav />
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0"}}>
<CurrentJourney />
</div>
<section style={{background:"var(--apricot)",color:"var(--ink)",borderRadius:"20px",margin:"20px 24px 0",padding:"110px 48px",textAlign:"center",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:"-40px",left:"-30px",fontSize:"11rem",opacity:0.12}}>🌎</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.8rem",opacity:0.85,letterSpacing:"0.12em"}}>THE ADVENTURER</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2.8rem,7vw,5.2rem)",fontWeight:600,maxWidth:"820px",margin:"24px auto",lineHeight:0.98,position:"relative"}}>195 countries. One life. No permanent address.</h1>
<p style={{opacity:0.9,maxWidth:"560px",margin:"0 auto",fontSize:"1.1rem",position:"relative"}}>Find home wherever you land.</p>
</section>

<section style={{maxWidth:"820px",margin:"0 auto",padding:"90px 48px 30px"}}>
<p style={{fontSize:"1.3rem",lineHeight:1.6,fontWeight:600,fontFamily:"'Fraunces',serif",textAlign:"center"}}>
I stopped waiting for the right time to leave. Once I actually left, staying in one place stopped making sense too.
</p>
</section>

<section style={{maxWidth:"760px",margin:"0 auto",padding:"0 48px 20px"}}>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.9}}>
Every plan has a version where you wait one more season for it to feel ready. I am done writing that version.
</p>
</section>

<section style={{maxWidth:"1000px",margin:"60px auto",padding:"0 48px"}}>
<p style={{fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:"clamp(1.8rem,4vw,2.8rem)",lineHeight:1.25,textAlign:"center",color:"var(--terracotta)"}}>
195 countries is not a bucket list. It is a discipline, the same one that got me to Nationals, applied to different ground.
</p>
</section>

<section style={{maxWidth:"760px",margin:"0 auto",padding:"20px 48px 0"}}>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.9,marginBottom:"28px"}}>
You do not get there by planning every step in advance. You get there by moving even when the plan falls apart three days before departure, the way Bolivia did. Home stopped being a fixed address a long time ago. It is Ginger doing a perimeter check of a new apartment at midnight. It is the first walk in a city I cannot pronounce yet.
</p>
</section>

<section style={{maxWidth:"1200px",margin:"50px auto",padding:"0 48px"}}>
<div style={{background:"var(--ink)",color:"var(--paper)",borderRadius:"20px",padding:"50px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"30px",textAlign:"center"}}>
<div>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"2.4rem",fontWeight:600,color:"var(--apricot)"}}>{journey.countriesVisited}</div>
<div style={{fontSize:"0.78rem",opacity:0.8}}>Countries so far</div>
</div>
<div>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"2.4rem",fontWeight:600,color:"var(--apricot)"}}>{journey.countriesTotal}</div>
<div style={{fontSize:"0.78rem",opacity:0.8}}>The actual goal</div>
</div>
<div>
<div style={{fontFamily:"'Fraunces',serif",fontSize:"2.4rem",fontWeight:600,color:"var(--apricot)"}}>1</div>
<div style={{fontSize:"0.78rem",opacity:0.8}}>Plan that fell apart and got rebuilt anyway</div>
</div>
</div>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 100px",textAlign:"center"}}>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3.4vw,2.4rem)",fontWeight:600,maxWidth:"700px",margin:"0 auto"}}>
Choosing to rebuild the plan instead of mourning the one that broke, that is the whole philosophy.
</p>
</section>

<section style={{background:"var(--teal)",color:"#F5EEDF",borderRadius:"20px",margin:"0 24px",padding:"70px 48px",textAlign:"center"}}>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.6vw,2.6rem)",fontWeight:600,marginBottom:"22px",maxWidth:"600px",margin:"0 auto 22px"}}>Follow it as it actually happens.</h2>
<Link href="/journal" style={{background:"var(--apricot)",color:"var(--ink)",padding:"16px 32px",borderRadius:"100px",fontWeight:700,fontSize:"0.9rem",textDecoration:"none"}}>Read the Journal</Link>
</section>
<Footer />
</main>
);
}
