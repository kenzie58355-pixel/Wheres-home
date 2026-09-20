import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import CurrentJourney from "../../components/CurrentJourney";
import PassportGrid from "../../components/PassportGrid";
import { journey } from "../../data/journey";
import { destinations } from "../../data/destinations";

const allCountries = [
{ code: "AF", name: "Afghanistan" }, { code: "AL", name: "Albania" }, { code: "DZ", name: "Algeria" },
{ code: "AD", name: "Andorra" }, { code: "AO", name: "Angola" }, { code: "AG", name: "Antigua and Barbuda" },
{ code: "AR", name: "Argentina" }, { code: "AM", name: "Armenia" }, { code: "AU", name: "Australia" },
{ code: "AT", name: "Austria" }, { code: "AZ", name: "Azerbaijan" }, { code: "BS", name: "Bahamas" },
{ code: "BH", name: "Bahrain" }, { code: "BD", name: "Bangladesh" }, { code: "BB", name: "Barbados" },
{ code: "BY", name: "Belarus" }, { code: "BE", name: "Belgium" }, { code: "BZ", name: "Belize" },
{ code: "BJ", name: "Benin" }, { code: "BT", name: "Bhutan" }, { code: "BO", name: "Bolivia" },
{ code: "BA", name: "Bosnia and Herzegovina" }, { code: "BW", name: "Botswana" }, { code: "BR", name: "Brazil" },
{ code: "BN", name: "Brunei" }, { code: "BG", name: "Bulgaria" }, { code: "BF", name: "Burkina Faso" },
{ code: "BI", name: "Burundi" }, { code: "CV", name: "Cabo Verde" }, { code: "KH", name: "Cambodia" },
{ code: "CM", name: "Cameroon" }, { code: "CA", name: "Canada" }, { code: "CF", name: "Central African Republic" },
{ code: "TD", name: "Chad" }, { code: "CL", name: "Chile" }, { code: "CN", name: "China" },
{ code: "CO", name: "Colombia" }, { code: "KM", name: "Comoros" }, { code: "CD", name: "DR Congo" },
{ code: "CG", name: "Congo" }, { code: "CR", name: "Costa Rica" }, { code: "HR", name: "Croatia" },
{ code: "CU", name: "Cuba" }, { code: "CY", name: "Cyprus" }, { code: "CZ", name: "Czechia" },
{ code: "DK", name: "Denmark" }, { code: "DJ", name: "Djibouti" }, { code: "DM", name: "Dominica" },
{ code: "DO", name: "Dominican Republic" }, { code: "EC", name: "Ecuador" }, { code: "EG", name: "Egypt" },
{ code: "SV", name: "El Salvador" }, { code: "GQ", name: "Equatorial Guinea" }, { code: "ER", name: "Eritrea" },
{ code: "EE", name: "Estonia" }, { code: "SZ", name: "Eswatini" }, { code: "ET", name: "Ethiopia" },
{ code: "FJ", name: "Fiji" }, { code: "FI", name: "Finland" }, { code: "FR", name: "France" },
{ code: "GA", name: "Gabon" }, { code: "GM", name: "Gambia" }, { code: "GE", name: "Georgia" },
{ code: "DE", name: "Germany" }, { code: "GH", name: "Ghana" }, { code: "GR", name: "Greece" },
{ code: "GD", name: "Grenada" }, { code: "GT", name: "Guatemala" }, { code: "GN", name: "Guinea" },
{ code: "GW", name: "Guinea-Bissau" }, { code: "GY", name: "Guyana" }, { code: "HT", name: "Haiti" },
{ code: "HN", name: "Honduras" }, { code: "HU", name: "Hungary" }, { code: "IS", name: "Iceland" },
{ code: "IN", name: "India" }, { code: "ID", name: "Indonesia" }, { code: "IR", name: "Iran" },
{ code: "IQ", name: "Iraq" }, { code: "IE", name: "Ireland" }, { code: "IL", name: "Israel" },
{ code: "IT", name: "Italy" }, { code: "JM", name: "Jamaica" }, { code: "JP", name: "Japan" },
{ code: "JO", name: "Jordan" }, { code: "KZ", name: "Kazakhstan" }, { code: "KE", name: "Kenya" },
{ code: "KI", name: "Kiribati" }, { code: "XK", name: "Kosovo" }, { code: "KW", name: "Kuwait" },
{ code: "KG", name: "Kyrgyzstan" }, { code: "LA", name: "Laos" }, { code: "LV", name: "Latvia" },
{ code: "LB", name: "Lebanon" }, { code: "LS", name: "Lesotho" }, { code: "LR", name: "Liberia" },
{ code: "LY", name: "Libya" }, { code: "LI", name: "Liechtenstein" }, { code: "LT", name: "Lithuania" },
{ code: "LU", name: "Luxembourg" }, { code: "MG", name: "Madagascar" }, { code: "MW", name: "Malawi" },
{ code: "MY", name: "Malaysia" }, { code: "MV", name: "Maldives" }, { code: "ML", name: "Mali" },
{ code: "MT", name: "Malta" }, { code: "MH", name: "Marshall Islands" }, { code: "MR", name: "Mauritania" },
{ code: "MU", name: "Mauritius" }, { code: "MX", name: "Mexico" }, { code: "FM", name: "Micronesia" },
{ code: "MD", name: "Moldova" }, { code: "MC", name: "Monaco" }, { code: "MN", name: "Mongolia" },
{ code: "ME", name: "Montenegro" }, { code: "MA", name: "Morocco" }, { code: "MZ", name: "Mozambique" },
{ code: "MM", name: "Myanmar" }, { code: "NA", name: "Namibia" }, { code: "NR", name: "Nauru" },
{ code: "NP", name: "Nepal" }, { code: "NL", name: "Netherlands" }, { code: "NZ", name: "New Zealand" },
{ code: "NI", name: "Nicaragua" }, { code: "NE", name: "Niger" }, { code: "NG", name: "Nigeria" },
{ code: "KP", name: "North Korea" }, { code: "MK", name: "North Macedonia" }, { code: "NO", name: "Norway" },
{ code: "OM", name: "Oman" }, { code: "PK", name: "Pakistan" }, { code: "PW", name: "Palau" },
{ code: "PS", name: "Palestine" }, { code: "PA", name: "Panama" }, { code: "PG", name: "Papua New Guinea" },
{ code: "PY", name: "Paraguay" }, { code: "PE", name: "Peru" }, { code: "PH", name: "Philippines" },
{ code: "PL", name: "Poland" }, { code: "PT", name: "Portugal" }, { code: "QA", name: "Qatar" },
{ code: "RO", name: "Romania" }, { code: "RU", name: "Russia" }, { code: "RW", name: "Rwanda" },
{ code: "KN", name: "Saint Kitts and Nevis" }, { code: "LC", name: "Saint Lucia" }, { code: "VC", name: "Saint Vincent and the Grenadines" },
{ code: "WS", name: "Samoa" }, { code: "SM", name: "San Marino" }, { code: "ST", name: "Sao Tome and Principe" },
{ code: "SA", name: "Saudi Arabia" }, { code: "SN", name: "Senegal" }, { code: "RS", name: "Serbia" },
{ code: "SC", name: "Seychelles" }, { code: "SL", name: "Sierra Leone" }, { code: "SG", name: "Singapore" },
{ code: "SK", name: "Slovakia" }, { code: "SI", name: "Slovenia" }, { code: "SB", name: "Solomon Islands" },
{ code: "SO", name: "Somalia" }, { code: "ZA", name: "South Africa" }, { code: "KR", name: "South Korea" },
{ code: "SS", name: "South Sudan" }, { code: "ES", name: "Spain" }, { code: "LK", name: "Sri Lanka" },
{ code: "SD", name: "Sudan" }, { code: "SR", name: "Suriname" }, { code: "SE", name: "Sweden" },
{ code: "CH", name: "Switzerland" }, { code: "SY", name: "Syria" }, { code: "TW", name: "Taiwan" },
{ code: "TJ", name: "Tajikistan" }, { code: "TZ", name: "Tanzania" }, { code: "TH", name: "Thailand" },
{ code: "TL", name: "Timor-Leste" }, { code: "TG", name: "Togo" }, { code: "TO", name: "Tonga" },
{ code: "TT", name: "Trinidad and Tobago" }, { code: "TN", name: "Tunisia" }, { code: "TR", name: "Turkey" },
{ code: "TM", name: "Turkmenistan" }, { code: "TV", name: "Tuvalu" }, { code: "UG", name: "Uganda" },
{ code: "UA", name: "Ukraine" }, { code: "AE", name: "United Arab Emirates" }, { code: "GB", name: "United Kingdom" },
{ code: "US", name: "United States" }, { code: "UY", name: "Uruguay" }, { code: "UZ", name: "Uzbekistan" },
{ code: "VU", name: "Vanuatu" }, { code: "VA", name: "Vatican City" }, { code: "VE", name: "Venezuela" },
{ code: "VN", name: "Vietnam" }, { code: "YE", name: "Yemen" }, { code: "ZM", name: "Zambia" },
{ code: "ZW", name: "Zimbabwe" },
];

export default function AdventureLog() {
const routeMap = new Map(journey.route.map((r) => [r.code, r.status]));
const destMap = new Map(destinations.map((d) => [d.countryCode, d.slug]));
const countries = allCountries.map((c) => ({ ...c, status: routeMap.get(c.code) || "empty", destSlug: destMap.get(c.code) }));

const visitedCount = journey.route.filter((r) => r.status === "visited").length;
const upcomingCount = journey.route.filter((r) => r.status === "upcoming").length;

return (
<main>
<Nav />
<div style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 0"}}>
<CurrentJourney />
</div>
<section style={{maxWidth:"800px",margin:"0 auto",padding:"40px 48px 20px"}}>
<span style={{fontFamily:"'Space Mono',monospace",fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.08em",color:"var(--terracotta)",display:"block",marginBottom:"10px"}}>Adventure Log</span>
<h1 style={{fontFamily:"'Fraunces',serif",fontSize:"clamp(2rem,4.5vw,3rem)",fontWeight:600}}>The passport, filling in one stamp at a time.</h1>
<p style={{marginTop:"14px",opacity:0.85,maxWidth:"560px"}}>{visitedCount} of {journey.countriesTotal} countries stamped, currently in {journey.current.country}, {upcomingCount} more already on the route. Not every plan works out, that&apos;s part of the log too. Tap any stamp for the story.</p>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 40px",display:"flex",gap:"24px",flexWrap:"wrap"}}>
<div style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.78rem"}}><div style={{width:"20px",height:"20px",borderRadius:"50%",border:"2px solid var(--stamp-red)",background:"var(--paper-2)"}}></div>Visited</div>
<div style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.78rem"}}><div style={{width:"20px",height:"20px",borderRadius:"50%",border:"2px solid var(--teal)",background:"var(--teal)"}}></div>Current</div>
<div style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.78rem"}}><div style={{width:"20px",height:"20px",borderRadius:"50%",border:"2px dashed var(--apricot)"}}></div>On the Route</div>
<div style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.78rem"}}><div style={{width:"20px",height:"20px",borderRadius:"50%",border:"2px dotted #999"}}></div>Attempted</div>
<div style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"0.78rem"}}><div style={{width:"20px",height:"20px",borderRadius:"50%",border:"1.5px solid var(--line)",opacity:0.6}}></div>Not Yet</div>
</section>

<section style={{maxWidth:"1200px",margin:"0 auto",padding:"20px 48px 90px"}}>
<PassportGrid countries={countries} />
</section>
<Footer />
</main>
);
}
