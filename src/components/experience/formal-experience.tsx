/**
 * Formal work experience component that displays the complete job history timeline.
 */
import { jobsData } from "./jobs-data";
import { NodeStructure } from "./node-structure";

export const FormalExperience = () => {
  return <NodeStructure jobsStructure={jobsData} />;
};
