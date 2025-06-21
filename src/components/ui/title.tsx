import { Lora } from "next/font/google";

const titleFont = Lora();

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: Props) => {
  return (
    <h1
      className={`${titleFont.className} antialiased text-xl md:text-2xl font-bold text-secondary uppercase ${className}`}
    >
      {children}
    </h1>
  );
};
