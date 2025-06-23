import { jobsData } from "./jobs-data";
import { NodeStructure } from "./node-structure";

export const AllExperience = () => {
  return <NodeStructure jobsStructure={jobsData} />;
};
