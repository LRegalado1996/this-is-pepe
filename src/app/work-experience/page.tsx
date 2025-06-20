import { Subtitle, Title } from "@/components";

export default function WorkExperiencePage() {
  return (
    <div className="w-full max-w-[1280px] p-4">
      <Title className="mb-4">Work Experience</Title>
      <ul className="p-4 bg-primary flex flex-col gap-2 ">
        <li>
          <div className="p-4">
            <Subtitle className="mb-4 text-dark-primary">
              1. Formal work experience
            </Subtitle>
            <ul className="p-4 bg-light-primary flex flex-col gap-2 ">
              <li>1. Loi</li>
              <li>2. Onetree-Medable</li>
              <li>3. Guataco</li>
              <li>4. Zureo</li>
            </ul>
          </div>
        </li>
        <li>2. Christmas Fair</li>
        <li>3. Pepe Shop</li>
      </ul>
    </div>
  );
}
