/**
 * Contact page with booking and messaging options for reaching Lucas Regalado.
 */
import { CalendlyForm, GoogleFormContact, SocialNetworks, Title } from "@/components";
import type { Metadata } from "next";
import {
  author,
  openGraphImagePath,
  primaryKeywords,
  siteName,
  siteTaglineEn,
  siteUrl,
  socialProfiles,
} from "@/lib/seo/config";

const pageTitle = "Contact Lucas Regalado | Book a Call or Send a Message";
const pageDescription = `${siteTaglineEn} Contact Lucas for freelance projects, senior full stack roles, or technical mentorship in English and Spanish.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [...primaryKeywords, "contact lucas regalado", "senior developer consultation"],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/contact`,
    siteName,
    type: "website",
    images: [
      {
        url: openGraphImagePath,
        width: 800,
        height: 800,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [openGraphImagePath],
  },
  other: {
    "contact:email": author.email,
    "contact:whatsapp": socialProfiles.whatsapp,
  },
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-[1280px] p-4">
      <Title className="mb-2">Let’s work together</Title>

      <p className="mb-8">
        Whether you have a project in mind, a job opportunity, or just want to say hello - I’d love
        to hear from you.
      </p>

      <SocialNetworks />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CalendlyForm />
        <GoogleFormContact />
      </div>
    </div>
  );
}
