import { Title } from "@/components";

export default function AboutMePage() {
  return (
    <div className="w-full max-w-[1280px] p-4">
      <Title className="mb-4">About Me</Title>
      <ul className="p-4 bg-primary flex flex-col gap-2 ">
        <li>1. Write a self-description</li>
        <li>2. Social Networks</li>
        <li>3. Introduce my family</li>
        <li>4. Write about my hobbies</li>
        <li>5. Summary of work experience</li>
      </ul>
    </div>
  );
}
