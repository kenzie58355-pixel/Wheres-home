"use client";
import { Component, ReactNode } from "react";

export default class GlobeErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
constructor(props: { children: ReactNode }) {
super(props);
this.state = { hasError: false };
}
static getDerivedStateFromError() {
return { hasError: true };
}
render() {
if (this.state.hasError) {
return (
<div style={{background:"var(--paper-2)",borderRadius:"18px",padding:"48px",textAlign:"center"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",opacity:0.7,display:"block",marginBottom:"10px"}}>3D globe unavailable in this browser</span>
<p style={{fontSize:"0.9rem",opacity:0.8}}>This device or browser can&apos;t create a WebGL context right now. The rest of the route is still viewable in the Adventure Log.</p>
</div>
);
}
return this.props.children;
}
}
