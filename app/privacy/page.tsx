import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Where's Home? and PawPass",
  description: "How Where's Home and the PawPass app collect, use, and protect your information.",
};

const sections = [
  {
    title: "Who we are",
    text: [
      "Where's Home is a travel site run by Mackenzie Peterson, and PawPass is its dog-travel app. This policy covers both the website, wheres-home.vercel.app, and the PawPass mobile app.",
    ],
  },
  {
    title: "What the website collects",
    text: [
      "Contact form: when you send an inquiry, we receive your name, email, message, and the service you picked. The form is processed by Formspree.",
      "Email list: if you join the list, your email is stored by Beacons, which sends our emails. You can unsubscribe from any email.",
      "Visitor stats: we use Vercel Web Analytics to count visits and see which pages are read. It does not use cookies, and we do not use it to identify you.",
      "Embedded content: some pages show YouTube videos and Google Maps. Those companies may collect data under their own privacy policies when you play or open them.",
    ],
  },
  {
    title: "What the PawPass app collects",
    text: [
      "Account: your email and login details, handled by Firebase Authentication from Google.",
      "Your content: your profile, your dog's details, adventure logs, photos, travel documents you save, and posts or comments you share in community features. This is stored in Google Firebase so it syncs across your devices.",
      "AI features: when you use Ask Mac or vet visit translation, the text you enter is sent to Anthropic to generate the answer.",
      "Places: place searches are sent to Foursquare to find dog-friendly spots.",
      "Notifications: if you allow them, we send reminders, such as when a saved document is about to expire.",
    ],
  },
  {
    title: "How we use it",
    text: [
      "To answer inquiries, deliver services you book, run the app's features, send emails you signed up for, and improve the site and app. We do not sell your personal information.",
    ],
  },
  {
    title: "Community posts",
    text: [
      "Posts and comments you share in PawPass community features can be seen by other users. You can delete your own posts. To report a post or a user, contact us.",
    ],
  },
  {
    title: "Deleting your data",
    text: [
      "You can ask us to delete your PawPass account and its data at any time, and the same goes for website inquiries and email list data. Contact us and we will delete it.",
    ],
  },
  {
    title: "Children",
    text: [
      "Where's Home and PawPass are not meant for children under 13, and we do not knowingly collect their information.",
    ],
  },
  {
    title: "Changes and contact",
    text: [
      "If this policy changes, we will update this page and its date. Questions or requests go through the contact form on our Work With Us page.",
    ],
  },
];

export default function Privacy() {
  return (
    <main>
      <Nav />
      <section style={{maxWidth:"760px",margin:"0 auto",padding:"70px 48px 90px"}}>
        <span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Privacy Policy</span>
        <h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>Your information, in plain words.</h1>
        <p style={{marginTop:"12px",opacity:0.7,fontSize:"0.9rem"}}>Last updated November 11, 2026</p>
        {sections.map((s, i) => (
          <div key={i} style={{marginTop:"36px"}}>
            <h2 style={{fontFamily:"'Fraunces',serif",fontSize:"1.4rem",fontWeight:600,marginBottom:"12px"}}>{s.title}</h2>
            {s.text.map((t, j) => (
              <p key={j} style={{lineHeight:1.75,opacity:0.85,marginBottom:"12px"}}>{t}</p>
            ))}
          </div>
        ))}
        <div style={{marginTop:"40px"}}>
          <Link href="/work-with-us" style={{background:"var(--ink)",color:"var(--paper)",padding:"14px 26px",borderRadius:"100px",fontWeight:600,fontSize:"0.9rem",textDecoration:"none"}}>Contact us</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
