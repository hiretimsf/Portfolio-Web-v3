import { WorkExperience } from "@/components/shared/work-experience";
import { WORK_EXPERIENCE } from "@/constants/work-experience";

export default function ResumePage() {
  return (
    <section className="bg-panda-background mx-auto max-w-7xl">
      <div className="border-b border-gray-200 px-6 py-8 md:py-10 lg:px-8">
        <h2 className="text-panda-text decoration-panda-orange mx-auto text-center text-3xl font-bold tracking-tight underline underline-offset-8 sm:text-4xl">
          WORK EXPERIENCE
        </h2>
      </div>
      <WorkExperience
        className="mx-auto w-full max-w-2xl border-r border-l border-gray-200"
        experiences={WORK_EXPERIENCE}
      />
    </section>
  );
}
