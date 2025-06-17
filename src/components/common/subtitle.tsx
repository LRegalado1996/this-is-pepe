import { Lora } from "next/font/google";
import Link from "next/link";

const titleFont = Lora();

interface Props {
  name: string;
  className?: string;
  href?: string;
}

export const Subtitle = ({ name, className, href }: Props) => {
  return (
    <h2
      className={`${titleFont.className} antialiased text-2xl font-bold text-dark-primary ${className}`}
    >
      {href ? (
        <Link href={href} className="hover:underline">
          {name}
        </Link>
      ) : (
        name
      )}
    </h2>
  );
};
