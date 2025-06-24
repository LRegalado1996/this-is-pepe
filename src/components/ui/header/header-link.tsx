"use client";

import Link from "next/link";
import type { PagesType } from "./types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  page: PagesType;
}

export const HeaderLink = ({ page }: Props) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === page.href);
  }, [pathname, page.href]);

  return (
    <Link
      href={page.href}
      aria-label={page.ariaLabel}
      className={`flex justify-center items-center gap-1 text-sm cursor-pointer py-2 px-4 rounded-full transition-all hover:bg-primary w-fit ${
        isActive && page.href !== "/" ? "bg-light-primary  font-semibold" : ""
      }`}
    >
      {page.icon}
      <span className="hidden md:block">{page.name}</span>
    </Link>
  );
};
