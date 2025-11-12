interface EducationSectionProps {
  className?: string;
}

export default function EducationSection({ className }: EducationSectionProps) {
  return (
    <section className={className} aria-label="Education">
      <p className="text-muted-foreground px-4 py-8 text-center text-sm">
        Education details coming soon.
      </p>
    </section>
  );
}
