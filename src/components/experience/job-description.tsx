"use client";

import Link from "next/link";
import { formatDateRange } from "@/utils";
import { JobStructure } from "./types";
import { Subtitle } from "../ui/subtitle";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  job: JobStructure;
}

export const JobDescription = ({ job }: Props) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`p-2 mb-6 relative overflow-hidden transition-[max-height] duration-300 ease-in-out ${
        show ? "max-h-[1000px]" : "max-h-30"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <Subtitle className="flex flex-wrap gap-x-2 items-baseline">
            <Link href={job.company.url} className="hover:underline">
              {job.company.name}
            </Link>
            <small className="text-xs h-fit">{formatDateRange(job.startDates, job.endDates)}</small>
          </Subtitle>
        </div>
        <Button onClick={() => setShow(!show)} className="flex gap-1 items-center text-xs">
          {show ? "See less" : "See more"}
          {show ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </Button>
      </div>

      {job.experiences}
      <ul className="flex flex-wrap gap-2 mt-4">
        {job.skils.map((skill, i) => (
          <li key={i} className="bg-primary py-2 px-4 rounded-full text-sm ">
            {skill}
          </li>
        ))}
      </ul>

      {!show && (
        <div className="absolute right-0 left-0 bottom-0 h-15 bg-gradient-to-t from-light-primary/90 to-transparent" />
      )}
    </div>
  );
};
