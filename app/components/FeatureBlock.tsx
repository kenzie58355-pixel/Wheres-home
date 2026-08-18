import Link from "next/link";

type FeatureBlockProps = {
tag: string;
title: string;
description: string;
ctaText: string;
bgColor: string;
textColor: string;
badgeText: string;
cardLabel: string;
reverse?: boolean;
href?: string;
imageSrc?: string;
};

export default function FeatureBlock({
tag,
title,
description,
ctaText,
bgColor,
textColor,
badgeText,
cardLabel,
reverse = false,
href,
imageSrc,
}: FeatureBlockProps) {
return (
<section
style={{
padding: "100px 32px",
display: "grid",
gridTemplateColumns: "1fr 1fr",
gap: "60px",
alignItems: "center",
background: bgColor,
color: textColor,
direction: reverse ? "rtl" : "ltr",
}}
>
<div style={{ direction: "ltr" }}>
<span
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.7rem",
textTransform: "uppercase",
letterSpacing: "0.08em",
opacity: 0.75,
display: "block",
marginBottom: "18px",
}}
>
{tag}
</span>
<h2
style={{
fontFamily: "'Fraunces', serif",
fontSize: "clamp(1.9rem, 4vw, 3rem)",
fontWeight: 600,
lineHeight: 1.05,
marginBottom: "20px",
}}
>
{title}
</h2>
<p style={{ fontSize: "1rem", lineHeight: 1.65, maxWidth: "440px", opacity: 0.9 }}>
{description}
</p>
{href ? (
<Link
href={href}
style={{
marginTop: "28px",
display: "inline-block",
border: `1.5px solid ${textColor}`,
color: textColor,
padding: "16px 30px",
borderRadius: "100px",
fontWeight: 600,
fontSize: "0.95rem",
cursor: "pointer",
textDecoration: "none",
}}
>
{ctaText}
</Link>
) : (
<div
style={{
marginTop: "28px",
display: "inline-block",
border: `1.5px solid ${textColor}`,
color: textColor,
padding: "16px 30px",
borderRadius: "100px",
fontWeight: 600,
fontSize: "0.95rem",
cursor: "pointer",
}}
>
{ctaText}
</div>
)}
</div>

<div style={{ direction: "ltr", position: "relative" }}>
<div
style={{
position: "relative",
height: "380px",
borderRadius: "24px",
background: imageSrc ? "none" : "rgba(245,238,223,0.08)",
border: imageSrc ? "none" : "1px solid rgba(245,238,223,0.25)",
display: "flex",
alignItems: "center",
justifyContent: "center",
}}
>
{imageSrc && (
<div style={{ position: "absolute", inset: 0, borderRadius: "24px", overflow: "hidden" }}>
<img
src={imageSrc}
alt={cardLabel}
style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
/>
</div>
)}
<div
style={{
position: "absolute",
top: "-14px",
right: "-14px",
width: "64px",
height: "64px",
borderRadius: "50%",
border: "1.5px dashed var(--stamp-red)",
display: "flex",
alignItems: "center",
justifyContent: "center",
fontFamily: "'Space Mono', monospace",
fontSize: "0.55rem",
textAlign: "center",
transform: "rotate(12deg)",
background: "var(--paper)",
color: "var(--stamp-red)",
zIndex: 2,
}}
>
{badgeText}
</div>
{!imageSrc && (
<span
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.75rem",
textAlign: "center",
opacity: 0.7,
letterSpacing: "0.1em",
}}
>
{cardLabel}
</span>
)}
</div>
</div>
</section>
);
}
