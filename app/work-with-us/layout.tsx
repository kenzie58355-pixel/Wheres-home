import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Relocation Help, Custom Itineraries and UGC | Where's Home?",
  description: "Moving abroad with your dog? Pet relocation help from $45, dog-friendly custom itineraries from $30 a day, and travel UGC for brands. Clear prices, booked through PayPal.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
