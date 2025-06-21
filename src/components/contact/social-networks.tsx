import type { ReactNode } from "react";
import Link from "next/link";

import { Instagram, Linkedin, Mail, MessageCircle, X } from "lucide-react";
import { Subtitle } from "../ui/subtitle";

interface Props {
  className: string;
}

type SocialNetworksType = {
  name: string;
  icon: ReactNode;
  href: string;
};

const socialNetworks: SocialNetworksType[] = [
  {
    name: "Linkedin",
    icon: <Linkedin size={20} strokeWidth={1} />,
    href: "https://www.linkedin.com/in/lucas-regalado",
  },
  {
    name: "Whatsapp",
    icon: <MessageCircle size={20} strokeWidth={1} />,
    href: "https://wa.me/59891475727",
  },
  {
    name: "E-mail",
    icon: <Mail size={20} strokeWidth={1} />,
    href: "mailto:lucasregalado@hotmail.com",
  },
  {
    name: "Instagram",
    icon: <Instagram size={20} strokeWidth={1} />,
    href: "https://www.instagram.com/lucas.regalado18?igsh=aWw1dzBmMGExOGV3&utm_source=qr",
  },
  {
    name: "ex-Twitter",
    icon: <X size={20} strokeWidth={1} />,
    href: "https://x.com/lucasregalado5",
  },
];

export const SocialNetworks = ({ className }: Props) => {
  return (
    <div className={`mb-8 ${className}`}>
      <Subtitle className="mb-2">My Social Networks</Subtitle>

      <ul className="flex gap-2 flex-wrap">
        {socialNetworks.map((socialNetwork, i) => (
          <li key={i}>
            <Link
              href={socialNetwork.href}
              target="_blank"
              className="flex items-center gap-2 hover:bg-primary py-2 px-4 rounded-full w-fit"
            >
              {socialNetwork.icon}
              <h3>{socialNetwork.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
