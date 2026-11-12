import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Leave Ecuador with a Dog: Free Export Certificate Checklist | Where's Home?",
  description: "A free, step-by-step checklist for getting your dog's Agrocalidad export certificate in Ecuador, from finding a registered vet to clearing ICA inspection in Colombia. Built from our real experience.",
};

const steps = [
  { title: "Find an Agrocalidad-registered vet", text: "Only a private vet registered with Agrocalidad can start your dog's Certificado Zoosanitario de Exportaci\u00f3n. Ask for proof of registration before you pay anything, and do not accept a non-answer." },
  { title: "Check your destination's rules", text: "Every country is different. For Colombia, the health certificate has to be recent, roughly within 10 days of entry, and your vaccine and deworming records need the product, lot number, and dates." },
  { title: "Gather your originals", text: "Rabies certificate, vaccine card, and microchip number. Keep the originals in your own hands and send copies only. Ours got held at the counter, and you do not want that." },
  { title: "Get every price in writing", text: "The official Agrocalidad fee is USD 28.90 per animal. The vet's fee is separate. Ask for the total, including deworming and any medication, before the first appointment." },
  { title: "Do the deworming", text: "Most certificates need internal and external deworming, recorded with the product and the date. Make sure your vet puts it on the paperwork." },
  { title: "Get the request number and filing date", text: "The request has to be filed at least 72 hours before travel. Ask for the request number, you need it to pick up the certificate anyway. Do not book your flight until it is filed." },
  { title: "Tell your airline", text: "Airlines have their own notice rules for dogs and service animals, often 48 hours or more. Call ahead and get it confirmed." },
  { title: "Pick up and double check", text: "Pick the certificate up at the Agrocalidad office you chose, often Manta on this part of the coast. Check the name, microchip number, destination, signature, and stamp before you leave. It is valid for about 10 days for most destinations, and only 5 for the United States." },
  { title: "Clear inspection on arrival", text: "Landing in Colombia, your dog goes through ICA agricultural inspection first. You can register online before you fly to make it faster, and the fee is paid by card, not cash." },
];

export default function EcuadorDogChecklist() {
  return (
    <main>
      <Nav />
      <section style={{background:"linear-gradient(160deg,#5c9c9c,#1e4a4a)",color:"#F7F2E7",borderRadius:"20px",margin:"20px 24px 0",padding:"90px 48px 60px"}}>
        <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.75rem",opacity:0.9}}>{"\u{1F1EA}\u{1F1E8}"} Free checklist</span>
        <h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2.2rem,5.5vw,3.8rem)",fontWeight:600,marginTop:"10px",maxWidth:"820px",lineHeight:1.05}}>How to leave Ecuador with your dog.</h1>
        <p style={{marginTop:"18px",maxWidth:"560px",opacity:0.9,lineHeight:1.7}}>Everything I wish I had known before trying to get Ginger home. Nine steps, in order, so your week goes better than mine did.</p>
      </section>

      <section style={{maxWidth:"820px",margin:"0 auto",padding:"60px 48px 30px",display:"flex",flexDirection:"column",gap:"18px"}}>
        {steps.map((s, i) => (
          <div key={i} style={{background:"var(--paper-2)",borderRadius:"16px",padding:"26px",display:"flex",gap:"20px"}}>
            <span style={{fontFamily:"'Fraunces',serif",fontSize:"2rem",fontWeight:600,color:"var(--terracotta)",lineHeight:1,minWidth:"34px"}}>{i + 1}</span>
            <div>
              <h2 style={{fontFamily:"'Fraunces',serif",fontSize:"1.2rem",fontWeight:600,marginBottom:"8px"}}>{s.title}</h2>
              <p style={{fontSize:"0.94rem",lineHeight:1.7,opacity:0.85}}>{s.text}</p>
            </div>
          </div>
        ))}
        <p style={{fontSize:"0.75rem",opacity:0.6,lineHeight:1.6,marginTop:"8px"}}>This checklist is guidance from real experience, not veterinary or legal advice. Rules change often, so always confirm with Agrocalidad, your destination&apos;s authorities, your airline, and a registered vet.</p>
      </section>

      <section style={{maxWidth:"820px",margin:"0 auto",padding:"0 48px 30px"}}>
<div style={{background:"var(--teal)",color:"var(--paper)",borderRadius:"18px",padding:"34px",display:"flex",gap:"28px",alignItems:"center",flexWrap:"wrap"}}>
<div style={{flex:"0 0 auto",width:"110px",height:"165px",borderRadius:"6px",background:"linear-gradient(180deg,#7c9c96 0%,#1E4A47 70%)",boxShadow:"0 14px 28px rgba(0,0,0,0.35)",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"12px",border:"1px solid rgba(247,242,231,0.25)"}}>
<span style={{fontFamily:"'Fraunces',serif",fontWeight:700,fontSize:"0.95rem",lineHeight:1.05}}>The Dog Parent&apos;s <em style={{color:"var(--apricot)"}}>Passport</em></span>
</div>
<div style={{flex:"1 1 260px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"var(--apricot)"}}>The full guide, $17</span>
<h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",margin:"6px 0 10px"}}>The Dog Parent&apos;s Passport</h3>
<p style={{fontSize:"0.92rem",opacity:0.9,lineHeight:1.6,marginBottom:"20px"}}>Everything I wish I had before moving Ginger between countries. Step-by-step paperwork for Colombia and Ecuador, copy-paste Spanish messages for vets and airlines, the red flags that cost us, and printable checklists. Instant PDF download.</p>
<a href="https://shop.beacons.ai/mmaathome/9b8c2ab7-ee7b-4c78-93e6-f6355efd0556" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"var(--apricot)",color:"var(--ink)",padding:"14px 26px",borderRadius:"100px",fontWeight:600,fontSize:"0.9rem",textDecoration:"none"}}>Get the guide, $17</a>
</div>
</div>
      </section>

      <section style={{maxWidth:"820px",margin:"0 auto",padding:"0 48px 30px"}}>
        <div style={{background:"var(--apricot)",borderRadius:"18px",padding:"34px"}}>
          <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.06em"}}>Want someone in your corner?</span>
          <h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.5rem",margin:"6px 0 10px"}}>Full Paperwork Plan, $150.</h3>
          <p style={{fontSize:"0.92rem",opacity:0.85,lineHeight:1.6,marginBottom:"20px"}}>A timeline for your exact route, ready-to-send Spanish messages for vets, and WhatsApp support until you fly. Or start with a $45 quick call.</p>
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap"}}>
            <Link href="/work-with-us" style={{background:"var(--ink)",color:"var(--paper)",padding:"14px 26px",borderRadius:"100px",fontWeight:600,fontSize:"0.9rem",textDecoration:"none"}}>See pet relocation help</Link>
            <Link href="/journal/the-vet-who-held-gingers-papers" style={{border:"1.5px solid var(--ink)",color:"var(--ink)",padding:"14px 26px",borderRadius:"100px",fontWeight:600,fontSize:"0.9rem",textDecoration:"none"}}>Read what happened to us</Link>
          </div>
        </div>
      </section>

      <section style={{maxWidth:"820px",margin:"0 auto",padding:"20px 48px 70px",textAlign:"center"}}>
        <h3 style={{fontFamily:"'Fraunces',serif",fontSize:"1.4rem",fontWeight:600,marginBottom:"8px"}}>Get the next country guide first.</h3>
        <p style={{fontSize:"0.92rem",opacity:0.8}}>Join the email list at the bottom of this page for new checklists, guides, and stories from the road.</p>
      </section>
      <Footer />
    </main>
  );
}
