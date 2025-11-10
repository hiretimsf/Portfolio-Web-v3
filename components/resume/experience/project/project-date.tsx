interface ProjectDateProps {
  date: string;
}

export function ProjectDate({ date }: ProjectDateProps) {
  return <span className="text-muted-foreground text-xs">{date}</span>;
}
