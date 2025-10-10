interface ContentsProps {
  children: React.ReactNode;
}

const Contents = ({ children }: ContentsProps) => {
  return <div className="mx-auto max-w-2xl">{children}</div>;
};

export default Contents;
