import type { MetadataRoute } from "next";
import { destinations } from "./data/destinations";
import { itineraries } from "./data/itineraries";
import { entries } from "./journal/data";
import { episodes } from "./vlog/data";

const base = "https://wheres-home.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/work-with-us", "/itineraries", "/ecuador-dog-checklist", "/destinations", "/journal", "/vlog", "/pawpass", "/pawpass/explore", "/pawpass/log", "/about", "/why", "/ginger", "/training", "/itinerary", "/adventure", "/privacy"];
  return [
    ...pages.map((p) => ({ url: base + p, lastModified: now })),
    ...destinations.filter((d) => d.slug !== "la-paz").map((d) => ({ url: base + "/destinations/" + d.slug, lastModified: now })),
    ...itineraries.map((it) => ({ url: base + "/itineraries/" + it.slug, lastModified: now })),
    ...entries
      .filter((e) => e.destination !== "la-paz" && (!e.publishDate || new Date(e.publishDate) <= now))
      .map((e) => ({ url: base + "/journal/" + e.slug, lastModified: now })),
    ...episodes.filter((ep) => new Date(ep.dropDate) <= now).map((ep) => ({ url: base + "/vlog/" + ep.slug, lastModified: now })),
  ];
}
