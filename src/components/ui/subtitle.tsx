import { Lora } from "next/font/google";

const titleFont = Lora();

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Subtitle = ({ children, className = "" }: Props) => {
  return (
    <div className={`${className}`}>
      <div className="h-1 w-8 bg-dark-primary mb-1" />
      <h2 className={`${titleFont.className} antialiased text-lg font-semibold`}>{children}</h2>
    </div>
  );
};
