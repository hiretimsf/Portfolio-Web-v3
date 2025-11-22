interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-5xl border-x">{children}</div>
    </div>
  );
};

export default Wrapper;
