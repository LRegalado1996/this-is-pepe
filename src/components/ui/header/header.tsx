import { ChevronsLeftRightEllipsis, FlaskConical, House, Info, MessageCircle } from "lucide-react";
import { PagesType } from "./types";
import { HeaderLink } from "./header-link";

const pages: PagesType[] = [
  {
    name: "",
    icon: <House size={20} strokeWidth={1} />,
    href: "/",
    ariaLabel: "Go to Home",
  },
  {
    name: "About Me",
    icon: <Info size={20} strokeWidth={1} />,
    href: "/about-me",
    ariaLabel: "Go to About Me",
  },
  {
    name: "Work Experience",
    icon: <ChevronsLeftRightEllipsis size={20} strokeWidth={1} />,
    href: "/work-experience",
    ariaLabel: "Go to Work Experience",
  },
  {
    name: "Laboratory",
    icon: <FlaskConical size={20} strokeWidth={1} />,
    href: "/labs",
    ariaLabel: "Go to Laboratory",
  },

  {
    name: "Contact",
    icon: <MessageCircle size={20} strokeWidth={1} />,
    href: "/contact",
    ariaLabel: "Go to Contact",
  },
];

export const Header = () => {
  return (
    <header className="w-full bg-dark-primary sticky top-0 z-10">
      <ul className="flex gap-2 uppercase max-w-[1280px] py-2 px-4 m-auto">
        {pages.map((page, i) => (
          <li key={i} className={i === 0 ? "flex-1" : ""}>
            <HeaderLink page={page} />
          </li>
        ))}
      </ul>
    </header>
  );
};
