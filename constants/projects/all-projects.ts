import currentProjects from "./current-projects";
import earlyProjects from "./early-projects";
import modernProjects from "./modern-projects";
import webApps from "./web-apps";

const allProjects = [
  ...earlyProjects,
  ...modernProjects,
  ...currentProjects,
  ...webApps,
];

export default allProjects;
