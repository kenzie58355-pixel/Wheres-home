import { journey } from "../data/journey";
import Link from "next/link";

export default function CurrentJourney() {
const arrived = new Date(journey.current.arrived).toLocaleDateString("en-US", { month: "short", day: "numeric" });

return (
<div style={{
display: "flex",
alignItems: "center",
gap: "14px",
background: "var(--paper-2)",
borderRadius: "100px",
padding: "10px 20px",
width: "fit-content",
fontSize: "0.85rem",
}}>
<span style={{
width: "8px",
height: "8px",
borderRadius: "50%",
background: "var(--stamp-red)",
display: "inline-block",
}}></span>
<span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", opacity: 0.7 }}>LIVE</span>
<span>{journey.current.flag} Currently in {journey.current.city}, {journey.current.country}</span>
<span style={{ opacity: 0.5 }}>·</span>
<span style={{ opacity: 0.7 }}>Since {arrived}</span>
<Link href="/itinerary" style={{ color: "var(--terracotta)", textDecoration: "none", fontWeight: 600 }}>Details →</Link>
</div>
);
}
