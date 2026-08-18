"use client";
import { useState } from "react";
import Link from "next/link";
import { playStampSound } from "../lib/sound";

type Country = {
code: string;
name: string;
status: string;
destSlug?: string;
};

export default function PassportGrid({ countries }: { countries: Country[] }) {
const [selected, setSelected] = useState<Country | null>(null);
const [soundOn, setSoundOn] = useState(true);

const styleFor = (status: string) => {
if (status === "visited") return { border: "2px solid var(--stamp-red)", background: "var(--paper-2)", color: "var(--stamp-red)" };
if (status === "current") return { border: "2px solid var(--teal)", background: "var(--teal)", color: "#F5EEDF", boxShadow: "0 0 0 4px rgba(30,74,71,0.15)" };
if (status === "upcoming") return { border: "2px dashed var(--apricot)", background: "transparent", color: "var(--apricot)" };
return { border: "1.5px solid var(--line)", background: "transparent", color: "var(--ink)", opacity: 0.45 };
};

const labelStyleFor = (status: string) => {
if (status === "visited" || status === "current" || status === "upcoming") return { fontWeight: 600, opacity: 1 };
return { opacity: 0.55 };
};

const statusText: Record<string, string> = {
visited: "Visited",
current: "Currently here",
upcoming: "On the route",
empty: "Not yet",
};

return (
<div>
<div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
<div
onClick={() => setSoundOn(!soundOn)}
style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.75rem", cursor: "pointer", background: "var(--paper-2)", padding: "8px 14px", borderRadius: "100px", width: "fit-content" }}
>
<span>{soundOn ? "🔊" : "🔇"}</span>
<span>{soundOn ? "Sound on" : "Sound off"}</span>
</div>
</div>

<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))", gap: "24px 12px" }}>
{countries.map((c, i) => (
<div
key={i}
onClick={() => {
playStampSound(soundOn);
setSelected(c);
}}
style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", cursor: "pointer" }}
>
<div style={{ position: "relative", width: "56px", height: "56px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "0.75rem", transition: "transform 0.2s ease", ...styleFor(c.status) }}>
{c.code}
{c.status === "visited" && <div style={{ position: "absolute", top: "50%", left: "-4px", right: "-4px", height: "2px", background: "var(--stamp-red)", transform: "rotate(-18deg)" }}></div>}
{c.status === "current" && <div style={{ position: "absolute", top: "-4px", right: "-4px", width: "12px", height: "12px", borderRadius: "50%", background: "var(--stamp-red)", border: "2px solid var(--paper)" }}></div>}
</div>
<span style={{ fontSize: "0.62rem", textAlign: "center", lineHeight: 1.2, ...labelStyleFor(c.status) }}>{c.name}</span>
</div>
))}
</div>

{selected && (
<div
onClick={() => setSelected(null)}
style={{ position: "fixed", inset: 0, background: "rgba(20,15,10,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "20px" }}
>
<div onClick={(e) => e.stopPropagation()} style={{ background: "var(--paper)", borderRadius: "20px", maxWidth: "440px", width: "100%", padding: "36px", position: "relative" }}>
<span onClick={() => setSelected(null)} style={{ position: "absolute", top: "16px", right: "20px", cursor: "pointer", fontSize: "1.1rem", opacity: 0.6 }}>✕</span>
<div style={{ width: "54px", height: "54px", borderRadius: "50%", border: "2px dashed var(--stamp-red)", color: "var(--stamp-red)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", marginBottom: "18px", transform: "rotate(-8deg)" }}>{selected.code}</div>
<h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem", marginBottom: "10px" }}>{selected.name}</h3>
<p style={{ fontSize: "0.9rem", opacity: 0.8, marginBottom: "18px" }}>{statusText[selected.status]}.</p>
{selected.destSlug ? (
<Link href={"/destinations/" + selected.destSlug} style={{ display: "inline-block", background: "var(--ink)", color: "var(--paper)", padding: "12px 22px", borderRadius: "100px", fontSize: "0.8rem", textDecoration: "none", fontWeight: 600 }}>
Explore {selected.name} →
</Link>
) : (
<span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", opacity: 0.6 }}>No guide here yet.</span>
)}
</div>
</div>
)}
</div>
);
}
