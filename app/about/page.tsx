import Nav from "../components/Nav";
import Footer from "../components/Footer";

const timeline = [
{ title: "Collegiate Wrestling", desc: "Walk-on to national qualifier, trained under an Olympic champion." },
{ title: "Teaching in Thailand", desc: "Two stints teaching English abroad, where the travel bug never left." },
{ title: "Built MMAatHome", desc: "An app and ebook for training anywhere, no gym required." },
{ title: "Departure, Aug 22, 2026", desc: "Left Dallas for La Paz with Ginger. The real journey starts here." },
];

export default function About() {
return (
<main>
<Nav />
<section style={{maxWidth:"820px",margin:"0 auto",padding:"80px 48px 40px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>About</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>Why Where&apos;s Home exists.</h1>
<p style={{marginTop:"16px",opacity:0.85}}>Where&apos;s Home didn&apos;t start as its own thing. It started as a branch of something else entirely, and grew into the story you&apos;re reading right now.</p>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 70px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Where It Started</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"20px"}}>MMAatHome.</h2>
<p style={{opacity:0.85,maxWidth:"680px",lineHeight:1.7}}>MMAatHome started as an answer to one problem, not everyone who wants to train has a gym nearby, a schedule that fits, or the money for a membership. It became an app and an ebook built around one idea, that discipline shouldn&apos;t depend on your zip code. Two programs, Circuit and MMA Fighter, an AI coach, a movement tracker, and a community of people training wherever they actually are.</p>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 70px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>The Branch</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"20px"}}>Where&apos;s Home.</h2>
<p style={{opacity:0.85,maxWidth:"680px",lineHeight:1.7}}>Once training stopped depending on a location, the next question was obvious, why stop at one city. Where&apos;s Home is what happens when the discipline built through MMAatHome gets pointed at the whole world instead of one gym. It&apos;s the documentation of that experiment, real cities, real training, real dog logistics, told as it actually happens.</p>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 70px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>The Travel Layer</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"20px"}}>PawPass.</h2>
<p style={{opacity:0.85,maxWidth:"680px",lineHeight:1.7}}>Traveling with a dog adds a layer of planning most travel content ignores. PawPass is the tool built to close that gap, dog-friendly spots, an adventure log that fills in one stamp at a time, and a rating system built on one honest question, would Ginger actually want to be here.</p>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>The Journey</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"40px"}}>So far.</h2>
<div style={{display:"grid",gap:"22px"}}>
{timeline.map((t,i) => (
<div key={i} style={{display:"flex",gap:"20px"}}>
<div style={{width:"10px",height:"10px",borderRadius:"50%",background:"var(--terracotta)",marginTop:"6px",flexShrink:0}}></div>
<div>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.05rem",marginBottom:"4px"}}>{t.title}</h4>
<p style={{fontSize:"0.85rem",opacity:0.75}}>{t.desc}</p>
</div>
</div>
))}
</div>
</section>
<Footer />
</main>
);
}
