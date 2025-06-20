import { Lora } from "next/font/google";

const titleFont = Lora();

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Subtitle = ({ children, className }: Props) => {
  return (
    <h2
      className={`${titleFont.className} antialiased text-2xl font-bold text-dark-primary ${className}`}
    >
      {children}
    </h2>
  );
};
