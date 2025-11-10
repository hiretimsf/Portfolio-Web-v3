import { EXPERIENCE } from "@/constants/experience";
import WorkExperienceSection from "../../components/resume/experience/experience-section";

export default function ResumePage() {
  return (
    <section className="bg-panda-background relative z-10 mx-auto max-w-7xl">
      <div className="border-b border-gray-200 px-6 py-8 md:py-10 lg:px-8">
        <h2 className="text-panda-text decoration-panda-orange z-10 mx-auto text-center text-3xl font-bold tracking-tight underline underline-offset-8 sm:text-4xl">
          WORK EXPERIENCE
        </h2>
        <svg
          className="absolute inset-0 z-[-1] h-30 [mask-image:radial-gradient(circle_at_100%_0,black,transparent_65%)]"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                stroke="#e5e7eb"
                fill="transparent"
                stroke-width="1"
              ></path>
            </pattern>
          </defs>
          <rect fill="url(#grid)" width="100%" height="100%"></rect>
        </svg>
      </div>
      <WorkExperienceSection className="mx-auto w-full max-w-2xl border-r border-l border-gray-200" />
    </section>
  );
}
