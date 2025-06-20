import { ChevronsLeftRightEllipsis, FlaskConical, House, Info, MessageCircle } from "lucide-react";
import { PagesType } from "./types";
import { HeaderLink } from "./header-link";

const pages: PagesType[] = [
  {
    name: "",
    icon: <House size={20} strokeWidth={1} />,
    href: "/",
  },
  {
    name: "About Me",
    icon: <Info size={20} strokeWidth={1} />,
    href: "/about-me",
  },
  {
    name: "Work Experience",
    icon: <ChevronsLeftRightEllipsis size={20} strokeWidth={1} />,
    href: "/work-experience",
  },
  {
    name: "Laboratory",
    icon: <FlaskConical size={20} strokeWidth={1} />,
    href: "/labs",
  },

  {
    name: "Contact",
    icon: <MessageCircle size={20} strokeWidth={1} />,
    href: "/contact",
  },
];

export const Header = () => {
  return (
    <header className="w-full bg-dark-primary py-2 px-4 sticky top-0 z-10">
      <ul className="flex gap-2 uppercase">
        {pages.map((page, i) => (
          <li key={i} className={i === 0 ? "flex-1" : ""}>
            <HeaderLink page={page} />
          </li>
        ))}
      </ul>
    </header>
  );
};
