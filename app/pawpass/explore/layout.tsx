import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog-Friendly Places in Cali, Puerto Lopez and Manta | Where's Home?",
  description: "Dog-friendly cafes, beaches, parks, stays, and groomers in Cali, Colombia and on the Ecuador coast, from a traveler living there with her standard poodle.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
