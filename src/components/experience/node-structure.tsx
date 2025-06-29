import { JobStructure } from "./types";
import { JobDescription } from "./job-description";

interface Props {
  jobsStructure: JobStructure[];
}

export const NodeStructure = ({ jobsStructure }: Props) => {
  return (
    <div className="grid grid-cols-[32px_1fr]">
      {jobsStructure.map((job, i) => [
        <div key={"node-" + i} className="flex justify-center relative w-full h-full">
          {/* Vertical line */}
          <div className="w-0.5 h-full absolute top-0 bottom-0 bg-primary" />

          {/* Nodes */}
          <div className="w-4 h-4 rounded-full bg-dark-primary z-10 relative top-5.5" />
        </div>,
        <JobDescription key={"job-" + i} job={job} />,
      ])}
    </div>
  );
};
