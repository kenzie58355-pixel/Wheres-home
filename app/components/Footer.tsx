export default function Footer() {
return (
<footer style={{ background: "var(--ink)", color: "var(--paper)", padding: "80px 32px 40px" }}>
<div
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "flex-start",
flexWrap: "wrap",
gap: "40px",
marginBottom: "60px",
}}
>
<div
style={{
width: "110px",
height: "110px",
borderRadius: "50%",
border: "2px dashed var(--apricot)",
display: "flex",
alignItems: "center",
justifyContent: "center",
textAlign: "center",
transform: "rotate(-8deg)",
fontFamily: "'Space Mono', monospace",
fontSize: "0.6rem",
color: "var(--apricot)",
lineHeight: 1.5,
letterSpacing: "0.08em",
flexShrink: 0,
}}
>
MMAATHOME<br />× PAWPASS<br />EST. 2026
</div>

<div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
<div>
<h4
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.7rem",
opacity: 0.6,
marginBottom: "14px",
textTransform: "uppercase",
letterSpacing: "0.08em",
}}
>
Explore
</h4>
<span style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px", opacity: 0.9 }}>Vlog</span>
<span style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px", opacity: 0.9 }}>PawPass</span>
<span style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px", opacity: 0.9 }}>About</span>
</div>
<div>
<h4
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.7rem",
opacity: 0.6,
marginBottom: "14px",
textTransform: "uppercase",
letterSpacing: "0.08em",
}}
>
Shop
</h4>
<span style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px", opacity: 0.9 }}>Transformation Journal</span>
<span style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px", opacity: 0.9 }}>MMAatHome App</span>
</div>
<div>
<h4
style={{
fontFamily: "'Space Mono', monospace",
fontSize: "0.7rem",
opacity: 0.6,
marginBottom: "14px",
textTransform: "uppercase",
letterSpacing: "0.08em",
}}
>
Follow
</h4>
<span style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px", opacity: 0.9 }}>TikTok</span>
<span style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px", opacity: 0.9 }}>Instagram</span>
<span style={{ display: "block", fontSize: "0.9rem", marginBottom: "10px", opacity: 0.9 }}>YouTube</span>
</div>
</div>
</div>

<div
style={{
borderTop: "1px solid rgba(245,238,223,0.15)",
paddingTop: "24px",
display: "flex",
justifyContent: "space-between",
fontSize: "0.75rem",
opacity: 0.55,
flexWrap: "wrap",
gap: "10px",
}}
>
<span>© 2026 Where&apos;s Home? — Built with discipline.</span>
<span>Currently: La Paz, Bolivia</span>
</div>
</footer>
);
}
