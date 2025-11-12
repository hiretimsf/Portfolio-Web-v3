import Heading from "@/components/shared/heading";
import EducationSection from "../../components/resume/education/education-section";
import WorkExperienceSection from "../../components/resume/experience/experience-section";

export default function ResumePage() {
  return (
    <>
      <section className="bg-panda-background relative z-10 mx-auto max-w-7xl">
        <Heading title="WORK EXPERIENCE" />
        <WorkExperienceSection className="mx-auto w-full max-w-2xl border-r border-l border-gray-200" />
      </section>
      <section className="bg-panda-background relative z-10 mx-auto mt-8 max-w-7xl border-t border-b border-gray-200">
        <Heading title="EDUCATION" />
        <EducationSection className="mx-auto w-full max-w-2xl border-r border-l border-gray-200" />
      </section>
    </>
  );
}
