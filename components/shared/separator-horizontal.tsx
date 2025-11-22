export default function SeparatorHorizontal() {
  return (
    <div className="mx-auto flex h-4 w-full border-y border-gray-200 bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-gray-200)]/56">
      <div className="mx-auto w-full max-w-5xl flex-shrink-0 border-x border-gray-200" />
    </div>
  );
}
