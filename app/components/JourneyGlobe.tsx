"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { journey } from "../data/journey";
import GlobeErrorBoundary from "./GlobeErrorBoundary";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

function GlobeInner() {
const globeEl = useRef<any>(null);
const wrapperRef = useRef<HTMLDivElement>(null);
const [size, setSize] = useState({ width: 600, height: 500 });
const [selected, setSelected] = useState<any>(null);

useEffect(() => {
function resize() {
if (wrapperRef.current) {
setSize({ width: wrapperRef.current.offsetWidth, height: 500 });
}
}
resize();
window.addEventListener("resize", resize);
return () => window.removeEventListener("resize", resize);
}, []);

useEffect(() => {
if (globeEl.current) {
const current = journey.route.find((r) => r.status === "current");
if (current) {
globeEl.current.pointOfView({ lat: current.lat, lng: current.lng, altitude: 2 }, 0);
}
globeEl.current.controls().autoRotate = true;
globeEl.current.controls().autoRotateSpeed = 0.4;
}
}, []);

const colorFor = (d: any) => {
if (d.code === "CO") return "#FFD700";
if (d.status === "current") return "#1E4A47";
if (d.status === "visited") return "#9C2A2E";
if (d.status === "upcoming") return "#E8A25D";
if (d.status === "attempted") return "#999999";
return "#999";
};

const radiusFor = (status: string) => (status === "current" ? 0.9 : 0.55);

return (
<div ref={wrapperRef} style={{ position: "relative", width: "100%" }}>
<Globe
ref={globeEl}
width={size.width}
height={size.height}
globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
backgroundColor="rgba(0,0,0,0)"
pointsData={journey.route}
pointLat="lat"
pointLng="lng"
pointColor={(d: any) => colorFor(d)}
pointRadius={(d: any) => radiusFor(d.status)}
pointAltitude={0.02}
pointLabel={(d: any) => `${d.flag} ${d.country}`}
onPointClick={(point: any) => {
setSelected(point);
if (globeEl.current) {
globeEl.current.pointOfView({ lat: point.lat, lng: point.lng, altitude: 1.5 }, 1000);
}
}}
/>

{selected && (
<div
style={{
position: "absolute",
bottom: "16px",
left: "16px",
right: "16px",
background: "var(--paper)",
borderRadius: "16px",
padding: "22px",
boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
maxWidth: "360px",
}}
>
<span
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.65rem",
textTransform: "uppercase",
letterSpacing: "0.06em",
opacity: 0.6,
display: "block",
marginBottom: "8px",
}}
>
{selected.status === "current" ? "Currently here" : selected.status === "visited" ? "Visited" : selected.status === "attempted" ? "Attempted, plan changed" : "On the route"}
</span>
<h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", marginBottom: "10px" }}>
{selected.flag} {selected.country}
</h3>
{selected.slug ? (
<Link
href={"/destinations/" + selected.slug}
style={{
display: "inline-block",
background: "var(--ink)",
color: "var(--paper)",
padding: "10px 20px",
borderRadius: "100px",
fontSize: "0.8rem",
textDecoration: "none",
fontWeight: 600,
}}
>
{selected.status === "attempted" ? "Read what happened →" : "Explore " + selected.country + " →"}
</Link>
) : (
<span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", opacity: 0.6 }}>No guide here yet.</span>
)}
</div>
)}
</div>
);
}

export default function JourneyGlobe() {
return (
<GlobeErrorBoundary>
<GlobeInner />
</GlobeErrorBoundary>
);
}
