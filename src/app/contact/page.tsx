import { CalendlyForm, GoogleFormContact, SocialNetworks, Title } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Lucas 'Pepe' Regalado, a full stack developer from Uruguay specialized in React, Node.js, and TypeScript. Reach out for job opportunities, freelance work, or collaborations.",
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
