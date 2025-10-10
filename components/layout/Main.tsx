interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-5xl border-x">{children}</div>
    </div>
  );
};

export default Main;
