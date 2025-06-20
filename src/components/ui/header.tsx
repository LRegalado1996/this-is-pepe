import Link from "next/link";

import {
  ChevronsLeftRightEllipsis,
  FlaskConical,
  House,
  Info,
} from "lucide-react";

type PagesType = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

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
];

export const Header = () => {
  return (
    <header className="w-full bg-dark-primary py-2 px-4 sticky top-0 z-10">
      <ul className="flex uppercase">
        {pages.map((page, i) => (
          <li key={i} className={i === 0 ? "flex-1" : ""}>
            <Link
              href={page.href}
              className="flex items-center gap-1 text-sm cursor-pointer py-2 px-4 rounded-full transition-all hover:bg-primary w-fit"
            >
              {page.icon}
              <span className="hidden md:block">{page.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
