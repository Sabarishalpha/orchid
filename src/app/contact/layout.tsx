import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Orchid Interiors",
  description:
    "Discuss your residential or commercial interior project with the Orchid Interiors design team in Coimbatore and Tamil Nadu.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", images: ["/images/hero.jpeg"] },
  twitter: { images: ["/images/hero.jpeg"] },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
