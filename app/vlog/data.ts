export type VlogEpisode = {
slug: string;
thumb: string;
dropDate: string;
category: string;
title: string;
desc: string;
destination?: string;
videoUrl?: string | null;
};

export const episodes: VlogEpisode[] = [
{ slug: "first-sparring-cali", thumb: "linear-gradient(160deg, #7c9c96, var(--teal))", dropDate: "2026-09-05", category: "Training", title: "First sparring session in Cali, Colombia", desc: "The first real roll at Light Reaction Jiujitsu, in the city that became the real starting point of this trip.", destination: "cali", videoUrl: null },
{ slug: "flying-to-cali-episode", thumb: "linear-gradient(160deg, #9fb8ac, #5c7a6f)", dropDate: "2026-09-08", category: "Ginger", title: "The flight that almost fell apart", desc: "A missed connection, a lucky rebooking, and landing in Cali just after midnight, told in real time.", destination: "cali", videoUrl: null },
{ slug: "ginger-through-customs", thumb: "linear-gradient(160deg, #e8c39a, var(--terracotta))", dropDate: "2026-09-11", category: "Ginger", title: "Getting Ginger through customs", desc: "Every document, every checkpoint, every nervous minute of getting a standard poodle through international arrivals in Colombia.", videoUrl: null },
{ slug: "chinchina-teaching-episode", thumb: "linear-gradient(160deg, #d9cdb0, #8a7a58)", dropDate: "2026-09-14", category: "Culture", title: "Teaching in Chinchina", desc: "A few days in coffee country, teaching, and why the trip got cut shorter than planned.", destination: "cali", videoUrl: null },
{ slug: "villamaria-waterfall-episode", thumb: "linear-gradient(160deg, var(--apricot), var(--terracotta-2))", dropDate: "2026-09-17", category: "Travel", title: "The waterfall Ginger swam in", desc: "A last-minute route change led to the tunnels of Villamaria, and the best afternoon of the trip so far.", destination: "cali", videoUrl: "https://youtube.com/shorts/W6eCb749Ib8" },
{ slug: "street-food-72-hours", thumb: "linear-gradient(160deg, #7c9c96, var(--teal-2))", dropDate: "2026-09-20", category: "Food", title: "Street food only, for 72 hours", desc: "Three days, no restaurants, just whatever Cali street vendors had going.", videoUrl: null },
];
