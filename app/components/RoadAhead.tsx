import { journey } from "../data/journey";

export default function RoadAhead() {
return (
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"16px 48px 0",display:"flex",alignItems:"center",gap:"18px",flexWrap:"wrap"}}>
<span style={{fontFamily:"'Fraunces',serif",fontStyle:"italic",fontSize:"0.95rem",opacity:0.75,whiteSpace:"nowrap"}}>The route isn&apos;t fixed.</span>
<div style={{display:"flex",alignItems:"center"}}>
{journey.route.map((stop, i) => (
<div key={i} style={{display:"flex",alignItems:"center"}}>
<div style={{
width: stop.status === "current" ? "42px" : "34px",
height: stop.status === "current" ? "42px" : "34px",
borderRadius:"50%",
display:"flex",
alignItems:"center",
justifyContent:"center",
fontSize: stop.status === "current" ? "1.2rem" : "1rem",
background: stop.status === "current" ? "var(--teal)" : stop.status === "visited" ? "var(--paper-2)" : "transparent",
border: stop.status === "visited" ? "2px solid var(--stamp-red)" : stop.status === "upcoming" ? "2px dashed var(--apricot)" : "1.5px solid var(--line)",
opacity: stop.status === "empty" ? 0.4 : 1,
}}>
{stop.flag}
</div>
{i < journey.route.length - 1 && (
<div style={{width:"18px",height:"1.5px",background:"var(--line)",margin:"0 4px"}}></div>
)}
</div>
))}
<div style={{width:"18px",height:"1.5px",background:"var(--line)",margin:"0 4px"}}></div>
<div style={{width:"34px",height:"34px",borderRadius:"50%",border:"1.5px dashed var(--line)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.9rem",opacity:0.4}}>?</div>
</div>
</div>
);
}
