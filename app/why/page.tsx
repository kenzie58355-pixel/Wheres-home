import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CurrentJourney from "../components/CurrentJourney";
import Link from "next/link";

export default function Why() {
return (
<main>
<Nav />
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0"}}>
<CurrentJourney />
</div>
<section style={{background:"linear-gradient(135deg,var(--terracotta),var(--stamp-red))",color:"#F5EEDF",borderRadius:"20px",margin:"20px 24px 0",padding:"110px 48px",textAlign:"center",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:"-50px",right:"-30px",fontSize:"11rem",opacity:0.1}}>🔨</div>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.8rem",opacity:0.9,letterSpacing:"0.12em"}}>WHY PAWPASS EXISTS</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2.6rem,6.5vw,4.6rem)",fontWeight:600,maxWidth:"780px",margin:"24px auto",lineHeight:1.05,position:"relative"}}>I couldn&apos;t find the information I needed.<br/>So I started building it.</h1>
</section>

<section style={{maxWidth:"760px",margin:"0 auto",padding:"90px 48px 20px",textAlign:"center"}}>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3.4vw,2.2rem)",fontWeight:600,lineHeight:1.3,marginBottom:"10px"}}>Try traveling internationally with a dog.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3.4vw,2.2rem)",fontWeight:600,lineHeight:1.3,opacity:0.7,marginBottom:"10px"}}>Not for a weekend.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3.4vw,2.2rem)",fontWeight:600,lineHeight:1.3,opacity:0.7,marginBottom:"10px"}}>Not for one vacation.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3.4vw,2.2rem)",fontWeight:600,lineHeight:1.3,color:"var(--terracotta)"}}>Actually move.</p>
</section>

<section style={{maxWidth:"700px",margin:"0 auto",padding:"20px 48px 60px"}}>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.85,textAlign:"center"}}>
Country after country. Month after month. Different languages, different rules, different transportation, different cities.
</p>
</section>

<section style={{maxWidth:"760px",margin:"0 auto",padding:"20px 48px 20px",textAlign:"center"}}>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.85,marginBottom:"6px"}}>I searched for the information I needed.</p>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.85,marginBottom:"30px"}}>And I kept finding the same thing.</p>
<div style={{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"}}>
<span style={{background:"var(--paper-2)",padding:"12px 22px",borderRadius:"100px",fontSize:"0.9rem"}}>Generic travel guides with a tiny &quot;traveling with pets&quot; section.</span>
<span style={{background:"var(--paper-2)",padding:"12px 22px",borderRadius:"100px",fontSize:"0.9rem"}}>Someone who took their dog on one trip, writing like they had cracked the code.</span>
</div>
</section>

<section style={{maxWidth:"1000px",margin:"70px auto",padding:"0 48px"}}>
<p style={{fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:"clamp(1.8rem,4vw,2.8rem)",lineHeight:1.25,textAlign:"center",color:"var(--terracotta)"}}>
But nobody was actually living the problem.
</p>
</section>

<section style={{maxWidth:"760px",margin:"0 auto",padding:"0 48px 60px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
<p style={{fontSize:"1rem",lineHeight:1.7,opacity:0.85}}>Nobody was figuring out what to do when your dog needs a groom in a city where you don&apos;t speak the language.</p>
<p style={{fontSize:"1rem",lineHeight:1.7,opacity:0.85}}>Nobody was navigating transportation with a 46 pound dog.</p>
<p style={{fontSize:"1rem",lineHeight:1.7,opacity:0.85}}>Nobody was dealing with heat cycles, vets, vaccinations, borders, pet friendly housing, and all the tiny problems that suddenly become very big when you&apos;re thousands of miles from home.</p>
</div>
</section>

<section style={{maxWidth:"760px",margin:"0 auto",padding:"0 48px 30px",textAlign:"center"}}>
<p style={{fontSize:"1.15rem",lineHeight:1.7,opacity:0.9,marginBottom:"6px"}}>So I decided to build what I couldn&apos;t find.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4vw,2.8rem)",fontWeight:600,color:"var(--terracotta)",marginBottom:"20px"}}>PawPass.</p>
<p style={{fontSize:"1.05rem",lineHeight:1.7,opacity:0.85}}>Not another list of places. A real world record of traveling the world with a dog.</p>
</section>

<section style={{maxWidth:"1000px",margin:"70px auto 30px",padding:"0 48px",textAlign:"center"}}>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3.2rem)",fontWeight:600,color:"var(--stamp-red)"}}>If I say it works, we&apos;ve been there.</h2>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 80px"}}>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"18px"}}>
<div style={{background:"var(--paper-2)",borderRadius:"16px",padding:"28px"}}>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem",marginBottom:"10px"}}>Every gym listed?</p>
<p style={{fontSize:"0.9rem",opacity:0.8}}>I&apos;ve walked through the door.</p>
</div>
<div style={{background:"var(--paper-2)",borderRadius:"16px",padding:"28px"}}>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem",marginBottom:"10px"}}>Every grooming spot?</p>
<p style={{fontSize:"0.9rem",opacity:0.8}}>Ginger has actually been groomed there.</p>
</div>
<div style={{background:"var(--paper-2)",borderRadius:"16px",padding:"28px"}}>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem",marginBottom:"10px"}}>Every dog friendly place?</p>
<p style={{fontSize:"0.9rem",opacity:0.8}}>We&apos;ve actually been there.</p>
</div>
<div style={{background:"var(--paper-2)",borderRadius:"16px",padding:"28px"}}>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.1rem",marginBottom:"10px"}}>Every route?</p>
<p style={{fontSize:"0.9rem",opacity:0.8}}>We&apos;ve actually figured it out.</p>
</div>
</div>
</section>

<section style={{maxWidth:"760px",margin:"0 auto",padding:"0 48px 30px",textAlign:"center"}}>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.85,marginBottom:"6px"}}>This isn&apos;t a database assembled from Google searches.</p>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.85,marginBottom:"20px"}}>It&apos;s being built from the road.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",fontWeight:600}}>One country. One dog. One adventure at a time.</p>
</section>

<section style={{maxWidth:"1000px",margin:"60px auto",padding:"0 48px"}}>
<p style={{fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:"clamp(1.6rem,3.6vw,2.4rem)",lineHeight:1.35,textAlign:"center",color:"var(--terracotta)",marginBottom:"20px"}}>
And if something goes wrong? That&apos;s part of the data too.
</p>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.85,textAlign:"center"}}>Because the goal isn&apos;t to make traveling with your dog look easy. It&apos;s to make it possible.</p>
</section>

<section style={{background:"var(--ink)",color:"var(--paper)",borderRadius:"20px",margin:"70px 24px",padding:"80px 48px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",opacity:0.7,letterSpacing:"0.12em",display:"block",marginBottom:"24px"}}>THE SINKER</span>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.5rem,3vw,2rem)",lineHeight:1.5,maxWidth:"680px",margin:"0 auto 20px"}}>I don&apos;t want PawPass to tell you what traveling with a dog could look like.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:600,color:"var(--apricot)",lineHeight:1.5,maxWidth:"680px",margin:"0 auto 34px"}}>I want it to tell you what actually works.</p>
<p style={{fontSize:"0.95rem",opacity:0.75,marginBottom:"6px"}}>So when you&apos;re standing in a city you&apos;ve never been to, with your dog beside you, wondering</p>
<p style={{fontSize:"1.1rem",fontStyle:"italic",opacity:0.9,marginBottom:"28px"}}>&quot;Okay... now what?&quot;</p>
<p style={{fontSize:"0.95rem",opacity:0.8,marginBottom:"4px"}}>You can open PawPass.</p>
<p style={{fontSize:"0.95rem",opacity:0.8,marginBottom:"40px"}}>And find the answer I wish someone had given me.</p>

<div style={{display:"flex",justifyContent:"center",gap:"20px",flexWrap:"wrap",marginBottom:"40px",fontFamily:"'Space Mono',monospace",fontSize:"0.8rem",opacity:0.85}}>
<span>Real places.</span>
<span>Real routes.</span>
<span>Real experiences.</span>
<span>Real dogs.</span>
</div>

<p style={{fontSize:"0.95rem",opacity:0.7,marginBottom:"6px"}}>Built by living it.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.6rem",fontWeight:600,color:"var(--apricot)",marginBottom:"6px"}}>PawPass.</p>
<p style={{fontSize:"0.95rem",opacity:0.8,marginBottom:"36px"}}>Because your adventure shouldn&apos;t end at &quot;pets allowed.&quot;</p>

<Link href="/pawpass/explore" style={{display:"inline-block",background:"var(--apricot)",color:"var(--ink)",padding:"16px 32px",borderRadius:"100px",fontWeight:700,fontSize:"0.9rem",textDecoration:"none"}}>Explore PawPass Live →</Link>
</section>
<Footer />
</main>
);
}
