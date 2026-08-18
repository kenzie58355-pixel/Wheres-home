import Nav from "./components/Nav";
import CurrentJourney from "./components/CurrentJourney";
import Hero from "./components/Hero";
import RoadAhead from "./components/RoadAhead";
import FeatureBlock from "./components/FeatureBlock";
import ThreePillars from "./components/ThreePillars";
import GlobeTeaser from "./components/GlobeTeaser";
import InterestGrid from "./components/InterestGrid";
import VlogGrid from "./components/VlogGrid";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
return (
<main>
<Nav />
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 48px"}}>
<CurrentJourney />
</div>
<RoadAhead />
<Hero />

<Reveal>
<FeatureBlock
tag="PawPass · 01 — Explore"
title="Find every dog-friendly corner of a new city."
description="A living map of parks, cafes, and trails, rated by real dogs, not algorithms. Built from the ground we actually walked."
ctaText="See the map"
bgColor="var(--teal)"
textColor="var(--cream-text)"
badgeText="EXPLORE VERIFIED"
cardLabel="MAP VIEW, PROTOTYPE"
href="/pawpass/explore"
imageSrc="/explore-photo.jpg"
/>
</Reveal>

<Reveal>
<FeatureBlock
tag="PawPass · 02 — Adventure Log"
title="Every trip, stamped and saved."
description="Log every border, every trail, every first, and watch your dog's own passport fill up as you go."
ctaText="See how it works"
bgColor="var(--terracotta-2)"
textColor="var(--cream-text)"
badgeText="LOGGED"
cardLabel="ADVENTURE LOG, 42 STAMPS"
reverse
href="/pawpass/log"
imageSrc="/log-photo.jpg"
/>
</Reveal>

<Reveal>
<FeatureBlock
tag="PawPass · 03 — Ginger Approved"
title="If Ginger wouldn't go back, we don't list it."
description="A curation layer built on one strict standard: would a well-traveled dog actually want to be here."
ctaText="Browse spots"
bgColor="var(--apricot)"
textColor="var(--ink)"
badgeText="G. APPROVED"
cardLabel="RATING SYSTEM, CURATED"
href="/pawpass/explore"
imageSrc="/ginger-photo.png"
/>
</Reveal>

<Reveal><ThreePillars /></Reveal>
<Reveal><GlobeTeaser /></Reveal>
<Reveal><InterestGrid /></Reveal>
<Reveal><VlogGrid /></Reveal>
<Reveal><Journal /></Reveal>
<Footer />
</main>
);
}
