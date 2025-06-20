import { Lora } from "next/font/google";

const titleFont = Lora();

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: Props) => {
  return (
    <h1
      className={`${titleFont.className} antialiased text-2xl md:text-4xl font-bold text-secondary ${className}`}
    >
      {children}
    </h1>
  );
};
