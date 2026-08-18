import Nav from "../components/Nav";
import Footer from "../components/Footer";

const services = [
{ title: "UGC Content", desc: "Authentic, on-brand clips shot on the road." },
{ title: "Sponsored Content", desc: "Full campaigns across TikTok and Instagram." },
{ title: "Photography", desc: "Destination and product photography." },
{ title: "Product Reviews", desc: "Honest, tested-on-the-road reviews." },
];

export default function WorkWithUs() {
return (
<main>
<Nav />
<section style={{maxWidth:"800px",margin:"0 auto",padding:"80px 48px 50px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Work With Us</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>Let&apos;s build something worth documenting.</h1>
<p style={{marginTop:"16px",opacity:0.85}}>UGC, sponsored content, and destination features, built on a platform brands can actually check out first.</p>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 70px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Services</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"36px"}}>What I offer.</h2>
<div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"24px"}}>
{services.map((s,i) => (
<div key={i} style={{border:"1px solid rgba(43,36,32,0.12)",borderRadius:"16px",padding:"28px"}}>
<h4 style={{fontFamily:"'Fraunces',serif",fontSize:"1.15rem",marginBottom:"8px"}}>{s.title}</h4>
<p style={{fontSize:"0.85rem",opacity:0.75}}>{s.desc}</p>
</div>
))}
</div>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 70px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Audience</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"10px"}}>The numbers.</h2><p style={{opacity:0.75,marginBottom:"30px",maxWidth:"500px"}}>These accounts launched 2 to 3 weeks ago, growth has been fast from day one.</p>
<div style={{display:"flex",gap:"40px",flexWrap:"wrap"}}>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"2.2rem",fontWeight:600,color:"var(--terracotta)"}}>163.7K</div><div style={{fontSize:"0.75rem",opacity:0.7}}>Views, last 30 days</div></div>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"2.2rem",fontWeight:600,color:"var(--terracotta)"}}>20K+</div><div style={{fontSize:"0.75rem",opacity:0.7}}>Likes on a single post</div></div>
<div><div style={{fontFamily:"'Fraunces',serif",fontSize:"2.2rem",fontWeight:600,color:"var(--terracotta)"}}>3</div><div style={{fontSize:"0.75rem",opacity:0.7}}>Active platforms, weeks old</div></div>
</div>
</section>
<section style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px 90px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Contact</span>
<h2 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(1.8rem,3.4vw,2.6rem)",fontWeight:600,marginBottom:"30px"}}>Say hello.</h2>
<form style={{display:"grid",gap:"14px",maxWidth:"500px"}}>
<input type="text" placeholder="Name" style={{background:"var(--paper-2)",border:"1px solid rgba(43,36,32,0.12)",borderRadius:"10px",padding:"14px 16px",fontFamily:"'Inter',sans-serif",fontSize:"0.9rem"}} />
<input type="text" placeholder="Brand" style={{background:"var(--paper-2)",border:"1px solid rgba(43,36,32,0.12)",borderRadius:"10px",padding:"14px 16px",fontFamily:"'Inter',sans-serif",fontSize:"0.9rem"}} />
<input type="email" placeholder="Email" style={{background:"var(--paper-2)",border:"1px solid rgba(43,36,32,0.12)",borderRadius:"10px",padding:"14px 16px",fontFamily:"'Inter',sans-serif",fontSize:"0.9rem"}} />
<textarea rows={4} placeholder="Tell me about the project" style={{background:"var(--paper-2)",border:"1px solid rgba(43,36,32,0.12)",borderRadius:"10px",padding:"14px 16px",fontFamily:"'Inter',sans-serif",fontSize:"0.9rem"}}></textarea>
<div style={{background:"var(--ink)",color:"var(--paper)",padding:"14px 28px",borderRadius:"100px",fontWeight:600,fontSize:"0.85rem",width:"fit-content"}}>Send Message</div>
</form>
</section>
<Footer />
</main>
);
}
