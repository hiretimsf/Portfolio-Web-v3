interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <p className="text-panda-text mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
      {children}
    </p>
  );
};

export default Title;
