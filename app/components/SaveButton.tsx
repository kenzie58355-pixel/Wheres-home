"use client";
import { useState } from "react";

export default function SaveButton() {
const [saved, setSaved] = useState(false);
return (
<span
onClick={() => setSaved(!saved)}
style={{
cursor: "pointer",
fontWeight: saved ? 600 : 400,
color: saved ? "var(--terracotta)" : "inherit",
display: "flex",
alignItems: "center",
gap: "5px",
}}
>
{saved ? "✓ Saved" : "Save"}
</span>
);
}
