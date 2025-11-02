/**
 * Work Experience page highlighting Lucas Regalado's professional history and responsibilities.
 */
import type { Metadata } from "next";
import { Title, FormalExperience } from "@/components";
import {
  openGraphImagePath,
  primaryKeywords,
  siteName,
  siteTaglineEn,
  siteUrl,
} from "@/lib/seo/config";

const pageTitle = "Lucas Regalado | Work Experience";
const pageDescription = `${siteTaglineEn} Review the professional journey across Streaver, LOi, Medable, and more.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [...primaryKeywords, "work experience", "Lucas Regalado resume"],
  alternates: {
    canonical: "/work-experience",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/work-experience`,
    siteName,
    type: "profile",
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
};

export default function WorkExperiencePage() {
  return (
    <div className="w-full max-w-[1280px] p-4">
      <Title className="mb-4">Professional Experience</Title>

      <FormalExperience />
      {/* <ul className="p-4 bg-primary flex flex-col gap-2 ">
        <li>
          <div className="p-4">
            <Subtitle className="mb-4 text-dark-primary">
              1. Formal work experience
            </Subtitle>
            <ul className="p-4 bg-light-primary flex flex-col gap-2 ">
              <li>1. Loi</li>
              <li>2. Onetree-Medable</li>
              <li>3. Guataco</li>
              <li>4. Zureo</li>
            </ul>
          </div>
        </li>
        <li>2. Christmas Fair</li>
        <li>3. Pepe Shop</li>
      </ul> */}
    </div>
  );
}
