import { Lora } from "next/font/google";

const titleFont = Lora({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Subtitle = ({ children, className = "" }: Props) => {
  return (
    <>
      <div className="h-1 w-8 bg-dark-primary mb-1" />
      <h2 className={`${titleFont.className} antialiased text-lg font-semibold ${className}`}>
        {children}
      </h2>
    </>
  );
};
