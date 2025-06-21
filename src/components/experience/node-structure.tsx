import { JobStructure } from "./types";
import { Subtitle } from "../ui/subtitle";
import { formatDateRange } from "@/utils";
import { ChevronUp } from "lucide-react";

interface Props {
  jobsStructure: JobStructure[];
}

export const NodeStructure = ({ jobsStructure }: Props) => {
  return (
    <div className="grid grid-cols-[32px_1fr]">
      {jobsStructure.map(({ company, startDates, endDates, experiences }, i) => [
        <div key={"a" + i} className="flex justify-center relative w-full h-full">
          {/* Vertical line */}
          <div className="w-0.5 h-full absolute top-0 bottom-0 bg-primary" />
          {i === 0 && (
            <ChevronUp size={30} strokeWidth={2} className="absolute -top-3 text-primary" />
          )}

          {/* Nodes */}
          <div className="w-4 h-4 rounded-full bg-dark-primary z-10 relative top-5.5" />
        </div>,
        <div key={"b" + i} className="p-2 mb-6">
          <Subtitle className="flex flex-wrap gap-x-2 items-baseline mb-4">
            {company}
            <small className="text-xs h-fit">{formatDateRange(startDates, endDates)}</small>
          </Subtitle>
          <div>{experiences}</div>
        </div>,
      ])}
    </div>
  );
};
