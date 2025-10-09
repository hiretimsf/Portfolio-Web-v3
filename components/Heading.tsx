interface HeadingProps {
  children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => (
  <header className="relative overflow-hidden bg-white">
    {/* Content */}
    <div className="relative z-10 mx-auto max-w-full">
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  </header>
);

export default Heading;
