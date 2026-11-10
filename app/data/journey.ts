export const journey = {
current: {
city: "Cali",
country: "Colombia",
countryCode: "CO",
flag: "🇨🇴",
neighborhood: "Cali",
arrived: "2026-08-27",
departs: null as string | null,
},
next: {
country: "Peru",
countryCode: "PE",
flag: "🇵🇪",
},
route: [
{ country: "United States", code: "US", flag: "🇺🇸", status: "visited", lat: 32.7767, lng: -96.7970, slug: null },
{ country: "Bolivia", code: "BO", flag: "🇧🇴", status: "attempted", lat: -16.4897, lng: -68.1193, slug: "la-paz" },
{ country: "Colombia", code: "CO", flag: "🇨🇴", status: "current", lat: 3.4516, lng: -76.5320, slug: "cali" },
{ country: "Ecuador", code: "EC", flag: "🇪🇨", status: "visited", lat: -0.9677, lng: -80.7089, slug: "manta" },
{ country: "Peru", code: "PE", flag: "🇵🇪", status: "upcoming", lat: -12.0464, lng: -77.0428, slug: null },
{ country: "Chile", code: "CL", flag: "🇨🇱", status: "upcoming", lat: -33.4489, lng: -70.6693, slug: null },
],
countriesVisited: 2,
countriesTotal: 195,
};
