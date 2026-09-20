import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CurrentJourney from "../components/CurrentJourney";
import Link from "next/link";

const mmaFeatures = ["An app", "An ebook", "Training programs", "An AI coach", "Movement tracking", "A community"];
const newList = ["New countries.", "New cities.", "New MMA gyms.", "New languages.", "New people.", "New problems.", "New versions of me."];
const dogQuestions = ["Can we fly there?", "Can we take a bus?", "Is there a dog friendly hotel?", "Where can she run?", "Where can she swim?", "Where can she actually be part of the adventure?"];
const timeline = ["Nine years of wrestling.", "A collegiate national qualification.", "Training under an Olympic champion.", "A one way ticket to Thailand.", "Teaching English abroad.", "Building MMAatHome into an actual business.", "Building an app.", "Writing an ebook.", "August 22, 2026. I left Dallas."];
const itsList = ["It's MMA.", "It's travel.", "It's dogs.", "It's entrepreneurship.", "It's learning to start over.", "It's finding gyms in countries I've never been to.", "It's learning languages.", "It's getting lost.", "It's getting stronger.", "It's watching Ginger discover places she's never seen before."];

export default function About() {
return (
<main>
<Nav />
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0"}}>
<CurrentJourney />
</div>

<section style={{background:"var(--ink)",color:"var(--paper)",borderRadius:"20px",margin:"20px 24px 0",padding:"110px 48px",textAlign:"center"}}>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.9rem,4.4vw,3rem)",fontWeight:600,lineHeight:1.3,maxWidth:"820px",margin:"0 auto 26px"}}>I left the United States with my dog, a one way ticket, and no idea where we would end up calling home.</p>
<p style={{opacity:0.7,fontSize:"1.05rem",marginBottom:"4px"}}>That sounds insane.</p>
<p style={{opacity:0.7,fontSize:"1.05rem"}}>Maybe it is.</p>
</section>

<section style={{maxWidth:"700px",margin:"70px auto",padding:"0 48px",textAlign:"center"}}>
<p style={{fontSize:"1.05rem",opacity:0.8,marginBottom:"8px"}}>But this didn&apos;t start with a passport.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:600,color:"var(--terracotta)"}}>It started with a pair of wrestling shoes.</p>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--terracotta)"}}>It Started With MMAatHome</span>
</section>
<section style={{maxWidth:"700px",margin:"20px auto 0",padding:"0 48px",textAlign:"center"}}>
<p style={{fontSize:"1.05rem",lineHeight:1.8,opacity:0.85}}>I spent nine years wrestling. I trained. I competed. I traveled. I became a collegiate national qualifier. I trained under an Olympic champion.</p>
</section>

<section style={{maxWidth:"1000px",margin:"50px auto",padding:"0 48px"}}>
<p style={{fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:"clamp(1.6rem,3.4vw,2.3rem)",lineHeight:1.3,textAlign:"center",color:"var(--terracotta)"}}>
You don&apos;t need the perfect environment to become who you want to be.
</p>
</section>

<section style={{maxWidth:"600px",margin:"0 auto",padding:"0 48px 40px",textAlign:"center"}}>
<p style={{opacity:0.75,marginBottom:"4px"}}>Not everyone has a gym.</p>
<p style={{opacity:0.75,marginBottom:"4px"}}>Not everyone has the money.</p>
<p style={{opacity:0.75,marginBottom:"24px"}}>Not everyone has the schedule.</p>
<p style={{fontSize:"1.05rem",marginBottom:"6px"}}>So I built one.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.6rem",fontWeight:600,color:"var(--terracotta)"}}>MMAatHome.</p>
</section>

<section style={{maxWidth:"800px",margin:"0 auto",padding:"0 48px 30px"}}>
<div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center"}}>
{mmaFeatures.map((f, i) => (
<span key={i} style={{background:"var(--paper-2)",padding:"10px 18px",borderRadius:"100px",fontSize:"0.85rem"}}>{f}</span>
))}
</div>
</section>
<section style={{maxWidth:"600px",margin:"0 auto",padding:"0 48px 90px",textAlign:"center"}}>
<p style={{fontSize:"1.05rem",opacity:0.8,marginBottom:"14px"}}>Everything built around one idea:</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.6rem",fontWeight:600}}>Train anywhere.</p>
</section>

<section style={{background:"var(--teal)",color:"#F5EEDF",borderRadius:"20px",margin:"0 24px",padding:"100px 48px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",opacity:0.8,letterSpacing:"0.1em",display:"block",marginBottom:"26px"}}>WHAT IF HOME DIDN&apos;T HAVE TO BE ONE PLACE?</span>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3.4vw,2.3rem)",lineHeight:1.4,maxWidth:"700px",margin:"0 auto 20px"}}>If I could train anywhere, why couldn&apos;t I live anywhere?</p>
<p style={{opacity:0.85,maxWidth:"600px",margin:"0 auto 12px"}}>Why was I supposed to spend my entire life in the same city just because I was born there?</p>
<p style={{opacity:0.85,maxWidth:"600px",margin:"0 auto 34px"}}>Why couldn&apos;t home become something I discovered instead of somewhere I was assigned?</p>
<p style={{fontSize:"1.05rem",marginBottom:"6px"}}>So I decided to find out.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.8rem",fontWeight:600,color:"var(--apricot)"}}>That&apos;s Where&apos;s Home.</p>
</section>

<section style={{maxWidth:"700px",margin:"80px auto 0",padding:"0 48px",textAlign:"center"}}>
<p style={{opacity:0.75,marginBottom:"4px"}}>This isn&apos;t a vacation.</p>
<p style={{opacity:0.75,marginBottom:"30px"}}>It&apos;s not a two week trip. It&apos;s me actually trying to build a life around the world.</p>
</section>
<section style={{maxWidth:"700px",margin:"0 auto",padding:"0 48px 40px"}}>
<div style={{display:"flex",flexWrap:"wrap",gap:"10px",justifyContent:"center"}}>
{newList.map((n, i) => (
<span key={i} style={{background:"var(--paper-2)",padding:"9px 16px",borderRadius:"100px",fontSize:"0.82rem"}}>{n}</span>
))}
</div>
</section>
<section style={{maxWidth:"700px",margin:"0 auto",padding:"0 48px 90px",textAlign:"center"}}>
<p style={{opacity:0.8,marginBottom:"18px"}}>And I&apos;m documenting all of it exactly as it happens.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",marginBottom:"4px"}}>The beautiful parts. The chaotic parts.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",marginBottom:"30px"}}>The moments where everything works, and the moments where absolutely nothing works.</p>
<p style={{fontSize:"1.05rem",opacity:0.85,marginBottom:"6px"}}>Because if I&apos;m going to find out where home is</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",fontWeight:600,color:"var(--terracotta)"}}>I want you to come with me.</p>
</section>

<section style={{background:"var(--apricot)",color:"var(--ink)",borderRadius:"20px",margin:"0 24px",padding:"90px 48px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",opacity:0.75,letterSpacing:"0.1em",display:"block",marginBottom:"20px"}}>EXCEPT I&apos;M NOT DOING IT ALONE</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.4vw,3rem)",fontWeight:600,marginBottom:"20px"}}>Meet Ginger.</h2>
<p style={{fontSize:"1.05rem",opacity:0.85,marginBottom:"6px"}}>My 46 pound standard poodle.</p>
<p style={{fontSize:"1.05rem",opacity:0.85,marginBottom:"6px"}}>Because apparently deciding to travel the world wasn&apos;t enough.</p>
<p style={{fontSize:"1.05rem",opacity:0.85,marginBottom:"30px"}}>I decided to bring my dog too. And that&apos;s where things get complicated.</p>
<p style={{fontSize:"0.95rem",opacity:0.75,marginBottom:"4px"}}>A lot of travel information tells you how to get somewhere.</p>
<p style={{fontSize:"0.95rem",opacity:0.75,marginBottom:"26px"}}>Very little tells you how to get there with a dog.</p>
<div style={{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"20px",fontFamily:"'Fraunces',serif",fontSize:"1.1rem"}}>
{dogQuestions.map((q, i) => <span key={i}>{q}</span>)}
</div>
<p style={{fontSize:"0.95rem",opacity:0.8}}>So I started building the answer.</p>
</section>

<section style={{maxWidth:"700px",margin:"90px auto 0",padding:"0 48px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--terracotta)",display:"block",marginBottom:"20px"}}>PawPass</span>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.6rem,3.4vw,2.2rem)",fontWeight:600,marginBottom:"30px"}}>Travel through a dog&apos;s eyes.</p>
<div style={{display:"flex",flexDirection:"column",gap:"8px",opacity:0.85,marginBottom:"30px"}}>
<span>Dog friendly places.</span>
<span>Real adventures.</span>
<span>An adventure log that fills up one stamp at a time.</span>
</div>
<p style={{opacity:0.8,marginBottom:"14px"}}>And a rating system based on one extremely important question:</p>
<p style={{fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:"1.5rem",color:"var(--terracotta)",marginBottom:"30px"}}>Would Ginger want to come back?</p>
<p style={{opacity:0.8,marginBottom:"4px"}}>Because I don&apos;t just want to see the world.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.3rem",fontWeight:600}}>I want her to see it too.</p>
</section>

<section style={{maxWidth:"1200px",margin:"100px auto 0",padding:"0 48px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--terracotta)"}}>This Is Only The Beginning</span>
</section>
<section style={{maxWidth:"600px",margin:"30px auto",padding:"0 48px"}}>
<div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
{timeline.map((t, i) => (
<div key={i} style={{display:"flex",alignItems:"center",gap:"14px"}}>
<span style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--terracotta)",flexShrink:0}}></span>
<span style={{fontSize:"0.98rem",opacity:0.85}}>{t}</span>
</div>
))}
</div>
</section>
<section style={{maxWidth:"600px",margin:"0 auto",padding:"0 48px 40px",textAlign:"center"}}>
<p style={{opacity:0.75,marginBottom:"4px"}}>I packed my things. Packed Ginger&apos;s things. Got on a plane. And started.</p>
</section>
<section style={{maxWidth:"700px",margin:"0 auto",padding:"0 48px 90px",textAlign:"center"}}>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.5rem,3vw,2rem)",fontWeight:600,marginBottom:"10px"}}>Now we&apos;re in Colombia.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.2rem",opacity:0.8,marginBottom:"6px"}}>Next comes Ecuador.</p>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"1.2rem",opacity:0.8,marginBottom:"30px"}}>Then more of South America. Then more of the world.</p>
<p style={{opacity:0.8,marginBottom:"10px"}}>The goal?</p>
<p style={{fontSize:"1.05rem",fontWeight:600}}>See how much of this planet we can experience while building a life we actually love.</p>
</section>

<section style={{background:"var(--ink)",color:"var(--paper)",borderRadius:"20px",margin:"0 24px",padding:"100px 48px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",opacity:0.7,letterSpacing:"0.1em",display:"block",marginBottom:"30px",textAlign:"center"}}>THIS IS WHERE&apos;S HOME</span>
<div style={{display:"flex",flexWrap:"wrap",gap:"12px",justifyContent:"center",marginBottom:"50px"}}>
{itsList.map((it, i) => (
<span key={i} style={{background:"rgba(245,238,223,0.08)",padding:"10px 18px",borderRadius:"100px",fontSize:"0.85rem"}}>{it}</span>
))}
</div>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.4rem,3vw,1.9rem)",fontWeight:600,textAlign:"center",maxWidth:"700px",margin:"0 auto 40px"}}>It&apos;s proving to myself that the life I imagined doesn&apos;t have to stay imaginary.</p>
<p style={{textAlign:"center",opacity:0.75,marginBottom:"30px"}}>And maybe, it&apos;s going to make you question where your own home could be.</p>
<p style={{textAlign:"center",opacity:0.7,marginBottom:"4px"}}>Because maybe home isn&apos;t a city.</p>
<p style={{textAlign:"center",opacity:0.7,marginBottom:"4px"}}>Maybe it isn&apos;t a house.</p>
<p style={{textAlign:"center",opacity:0.7,marginBottom:"30px"}}>Maybe it isn&apos;t even a country.</p>
<p style={{textAlign:"center",fontFamily:"'Fraunces',serif",fontSize:"clamp(1.5rem,3.2vw,2.1rem)",fontWeight:600,color:"var(--apricot)",maxWidth:"680px",margin:"0 auto"}}>Maybe home is wherever you decide to build a life.</p>
</section>

<section style={{maxWidth:"700px",margin:"90px auto",padding:"0 48px",textAlign:"center"}}>
<p style={{opacity:0.8,marginBottom:"4px"}}>So I&apos;m going to keep moving.</p>
<p style={{opacity:0.8,marginBottom:"4px"}}>Keep training.</p>
<p style={{opacity:0.8,marginBottom:"4px"}}>Keep building.</p>
<p style={{opacity:0.8,marginBottom:"4px"}}>Keep exploring.</p>
<p style={{opacity:0.8,marginBottom:"30px"}}>Keep bringing Ginger.</p>
<div style={{display:"flex",gap:"10px",justifyContent:"center",flexWrap:"wrap",marginBottom:"40px",fontFamily:"'Space Mono',monospace",fontSize:"0.8rem",opacity:0.7}}>
<span>One country.</span>
<span>One gym.</span>
<span>One adventure.</span>
<span>One stamp at a time.</span>
</div>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.6vw,2.4rem)",fontWeight:600,marginBottom:"6px"}}>Where&apos;s Home?</h2>
<p style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.4rem,2.8vw,1.8rem)",color:"var(--terracotta)",marginBottom:"36px"}}>We&apos;re finding out.</p>
<Link href="/journal" style={{background:"var(--ink)",color:"var(--paper)",padding:"16px 32px",borderRadius:"100px",fontWeight:700,fontSize:"0.9rem",textDecoration:"none"}}>Follow the Journal →</Link>
</section>
<Footer />
</main>
);
}
