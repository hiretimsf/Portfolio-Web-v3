interface TagProps {
  title: string;
}

export default function Tag({ title }: TagProps) {
  return (
    <span className="bg-muted/50 text-panda-text/80 inline-flex items-center rounded-lg border border-gray-200 px-1.5 py-0.5 font-mono text-xs">
      {title}
    </span>
  );
}
