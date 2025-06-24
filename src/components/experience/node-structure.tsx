import Link from "next/link";
import { JobStructure } from "./types";
import { Subtitle } from "../ui/subtitle";
import { formatDateRange } from "@/utils";

interface Props {
  jobsStructure: JobStructure[];
}

export const NodeStructure = ({ jobsStructure }: Props) => {
  return (
    <div className="grid grid-cols-[32px_1fr]">
      {jobsStructure.map(({ company, startDates, endDates, experiences, skils }, i) => [
        <div key={"node-" + i} className="flex justify-center relative w-full h-full">
          {/* Vertical line */}
          <div className="w-0.5 h-full absolute top-0 bottom-0 bg-primary" />

          {/* Nodes */}
          <div className="w-4 h-4 rounded-full bg-dark-primary z-10 relative top-5.5" />
        </div>,
        <div key={"job-" + i} className="p-2 mb-6">
          <Subtitle className="flex flex-wrap gap-x-2 items-baseline mb-4">
            <Link href={company.url} className="hover:underline">
              {company.name}
            </Link>
            <small className="text-xs h-fit">{formatDateRange(startDates, endDates)}</small>
          </Subtitle>
          {experiences}
          <ul className="flex flex-wrap gap-2 mt-4">
            {skils.map((skill, i) => (
              <li key={i} className="bg-primary py-2 px-4 rounded-full text-sm ">
                {skill}
              </li>
            ))}
          </ul>
        </div>,
      ])}
    </div>
  );
};
