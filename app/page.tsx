import Hero from "./components/Hero";
import FeatureBlock from "./components/FeatureBlock";
import VlogGrid from "./components/VlogGrid";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

export default function Home() {
return (
<main>
<Hero />

<FeatureBlock
tag="PawPass · 01 — Explore"
title="Find every dog-friendly corner of a new city."
description="A living map of parks, cafés, and trails — rated by real dogs, not algorithms. Built from the ground we actually walked."
ctaText="See the map"
bgColor="var(--teal)"
textColor="var(--cream-text)"
badgeText="EXPLORE VERIFIED"
cardLabel="MAP VIEW — PROTOTYPE —"
/>

<FeatureBlock
tag="PawPass · 02 — Adventure Log"
title="Every trip, stamped and saved."
description="Log every border, every trail, every first — and watch your dog's own passport fill up as you go."
ctaText="See how it works"
bgColor="var(--terracotta-2)"
textColor="var(--cream-text)"
badgeText="LOGGED"
cardLabel="ADVENTURE LOG — 42 STAMPS —"
reverse
/>

<FeatureBlock
tag="PawPass · 03 — Ginger Approved"
title="If Ginger wouldn't go back, we don't list it."
description="A curation layer built on one strict standard: would a well-traveled dog actually want to be here."
ctaText="Browse spots"
bgColor="var(--apricot)"
textColor="var(--ink)"
badgeText="G. APPROVED"
cardLabel="RATING SYSTEM — CURATED —"
/>

<VlogGrid />

<Journal />

<Footer /></main>
);
}
