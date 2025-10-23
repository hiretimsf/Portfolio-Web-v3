import currentProjects from "./current-projects";
import earlyProjects from "./early-projects";
import modernProjects from "./modern-projects";
import webProjects from "./web-projects";

const allProjects = [
  ...earlyProjects,
  ...modernProjects,
  ...currentProjects,
  ...webProjects,
];

export default allProjects;
