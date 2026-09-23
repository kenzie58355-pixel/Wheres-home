"use client";
import { useEffect } from "react";

export default function BeaconsEmailForm() {
useEffect(() => {
const existing = document.querySelector('script[src*="emailForm.js"]');
if (existing) return;

function loadBeaconsEmailFormEmbed() {
const s = document.createElement("script");
const t = Math.floor(new Date().getTime() / 120000);
s.type = "module";
s.async = true;
s.src = `https://beacons.ai/embeds/emailForm.js?v=${t}&b=mmaathome&f=5d93332b-1850-45db-8208-f7490a1c6375`;
(document.head || document.body || document.documentElement).appendChild(s);
}

if (document.readyState === "loading") {
document.addEventListener("DOMContentLoaded", loadBeaconsEmailFormEmbed, { once: true });
} else {
loadBeaconsEmailFormEmbed();
}
}, []);

return <div id="5d93332b-1850-45db-8208-f7490a1c6375"></div>;
}
