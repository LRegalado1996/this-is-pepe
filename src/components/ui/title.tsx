import { Lora } from "next/font/google";

const titleFont = Lora();

interface Props {
  name: string;
  className?: string;
}

export const Title = ({ name, className }: Props) => {
  return (
    <h1
      className={`${titleFont.className} antialiased text-4xl font-bold text-secondary ${className}`}
    >
      {name}
    </h1>
  );
};
