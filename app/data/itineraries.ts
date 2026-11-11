export type ItineraryDay = {
  label: string;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
};

export type Itinerary = {
  slug: string;
  title: string;
  place: string;
  flag: string;
  length: string;
  bestFor: string;
  destination: string;
  heroGradient: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  days: ItineraryDay[];
  tips: string[];
};

export const itineraries: Itinerary[] = [
  {
    slug: "3-days-in-cali-with-a-dog",
    title: "3 Days in Cali with a Dog",
    place: "Cali, Colombia",
    flag: "\u{1F1E8}\u{1F1F4}",
    length: "3 days",
    bestFor: "First-timers, coffee lovers, dogs who like people",
    destination: "cali",
    heroGradient: "linear-gradient(160deg,#7c9c96,#1e4a47)",
    seoTitle: "3 Days in Cali, Colombia with a Dog: Dog-Friendly Itinerary",
    seoDescription: "A dog-friendly 3-day Cali itinerary built from real travel with a standard poodle: caf\u00e9s with patios, parks, the river boulevard, grooming, and what to know about street dogs.",
    intro: "Cali is warm, green, and one of the easiest big cities in Colombia to explore with a dog, as long as you plan around the heat and the street dogs. This is the three days I would give a friend landing here with their dog for the first time, built from our own months here with Ginger. Slow mornings, shaded afternoons, and a lot of good coffee.",
    days: [
      {
        label: "Day 1",
        title: "Land, breathe, and find your coffee",
        morning: "Start easy after travel day. Breakfast at La Marianela in Granada, ask for a spot on the breezy upstairs terrace, and let your dog settle in while you plan the rest of the trip.",
        afternoon: "Rest through the hottest hours. Cali afternoons are no joke for a dog in a full coat, so this is your nap, unpack, and find-the-closest-pharmacy window.",
        evening: "Walk the Bulevar del R\u00edo downtown once it cools off. It is wide, shaded, and pedestrian, a perfect first look at the city on a leash.",
      },
      {
        label: "Day 2",
        title: "Parks, patios, and the south of the city",
        morning: "Early walk at Parque del Perro in San Fernando, before the plaza gets busy. Then coffee on the leafy garden patio at Tierradentro Caf\u00e9, where there is even a caf\u00e9 dog.",
        afternoon: "Head south to Jard\u00edn Plaza and Ciudad Jard\u00edn. Walk the outdoor areas around the mall, it is one of Ginger's favorite routes in the whole city.",
        evening: "Dinner close to home and an early night. Day 3 starts early.",
      },
      {
        label: "Day 3",
        title: "Get out of the city",
        morning: "Breakfast at Caf\u00e9 Valpara\u00edso in Pance, mostly outdoor seating under the trees by a pond. Go early on weekends, it fills up.",
        afternoon: "Spend the rest of the day at Dog Camp Cali, or book a groom at Peluquer\u00eda Canina Mundo Peludo in Nueva Granada if your dog needs one after travel. Ginger's groom there was a great one.",
        evening: "One last slow walk and a packed bag. If you are staying longer, this is where you start making Cali yours.",
      },
    ],
    tips: [
      "Walk early and late. Midday heat is hard on dogs, especially thick coats.",
      "Keep your dog close on leash. Cali has a lot of street and outdoor dogs, and not all of them are friendly.",
      "If your dog is in heat, plan for it. Ginger started her cycle the day we flew in, and a diaper plus a romper made a real difference.",
      "Always ask before bringing a dog inside a caf\u00e9 or restaurant. Patios are usually the easy yes.",
    ],
  },
  {
    slug: "a-week-on-the-ecuador-coast-with-a-dog",
    title: "A Week on the Ecuador Coast with a Dog",
    place: "Ayampe, Puerto L\u00f3pez and Manta, Ecuador",
    flag: "\u{1F1EA}\u{1F1E8}",
    length: "7 days",
    bestFor: "Beach dogs, slow travel, anyone flying out of Ecuador with a pet",
    destination: "manta",
    heroGradient: "linear-gradient(160deg,#5c9c9c,#1e4a4a)",
    seoTitle: "A Week on the Ecuador Coast with a Dog: Ayampe, Puerto L\u00f3pez and Manta",
    seoDescription: "A dog-friendly week on Ecuador's Manab\u00ed coast, from Ayampe and Puerto L\u00f3pez to Manta, plus how to plan your dog's export certificate so you can actually leave.",
    intro: "The Manab\u00ed coast is quiet beaches, fishing boats, and sand for days. Ginger gave Ecuador a 7 out of 10, she did not care for much besides chasing crabs on the beach, but if your dog loves the ocean this is a dream. This plan is built around a base in Ayampe, with Puerto L\u00f3pez for food and errands and Manta for the city, and it builds in the one thing nobody tells you: time to get your dog's paperwork done before you fly out.",
    days: [
      {
        label: "Day 1",
        title: "Arrive and slow down in Ayampe",
        morning: "Travel day. Settle into your stay in Ayampe, a tiny surf village where the road ends at the sand.",
        afternoon: "Let your dog decompress. New country, new smells, new heat.",
        evening: "First beach walk at sunset. Watch for crabs, your dog definitely will.",
      },
      {
        label: "Day 2",
        title: "Puerto L\u00f3pez by the water",
        morning: "Early walk on the beach and malec\u00f3n in Puerto L\u00f3pez, when the fishing boats come in and the sand is still cool.",
        afternoon: "Lunch at La Caba\u00f1a D'Chuky, a family-run, open-air seafood spot on the malec\u00f3n. Ask first, then sit outside with your dog.",
        evening: "Back to Ayampe for a quiet night.",
      },
      {
        label: "Day 3",
        title: "Start the paperwork, seriously",
        morning: "If you are flying out with your dog in the next two weeks, contact an Agrocalidad-registered vet today. Ask for their registration, every price in writing, and how they file.",
        afternoon: "Gather your originals, rabies certificate, vaccine card, microchip info, and keep them in your own hands. Send copies only.",
        evening: "Beach time. You earned it.",
      },
      {
        label: "Day 4",
        title: "A beach day, the whole day",
        morning: "Long beach walk in Ayampe while the tide is low.",
        afternoon: "Shade, water, and a nap for everyone.",
        evening: "Sunset and an early night.",
      },
      {
        label: "Day 5",
        title: "Manta and the big beaches",
        morning: "Head up to Manta and walk Playa Santa Marianita, a quieter kitesurf beach a short drive south of the city with plenty of space.",
        afternoon: "Coffee and food at Carbono Resto Caf\u00e9, then a look at Playa El Murci\u00e9lago. It gets busy fast, so keep it short with a dog.",
        evening: "Stay in Manta or head back down the coast.",
      },
      {
        label: "Day 6",
        title: "Vet visit and deworming",
        morning: "Most export certificates need internal and external deworming with dates and product details. Get it done at your vet and confirm everything is going on the paperwork.",
        afternoon: "Ask for the request number and filing date. You will need the number to pick up the certificate anyway.",
        evening: "Easy walk and pack what you can.",
      },
      {
        label: "Day 7",
        title: "Pick up and pack",
        morning: "Pick up the certificate at the Agrocalidad office you chose, often Manta for this part of the coast. Check the name, microchip number, destination, and stamps before you leave the counter.",
        afternoon: "Photograph every document and keep printed copies.",
        evening: "Last sunset on the coast. You are ready to go.",
      },
    ],
    tips: [
      "Start the export certificate at least a week before your flight. The official minimum is 72 hours, but real life is slower.",
      "Only an Agrocalidad-registered vet can start the certificate. Verify the registration yourself.",
      "Get every price in writing before the first appointment, including deworming and medication.",
      "National parks and protected areas often restrict pets, so check the rules before planning Los Frailes or Isla de la Plata with a dog.",
      "Read our full vet story in the journal before you choose a clinic in Puerto L\u00f3pez.",
    ],
  },
];
