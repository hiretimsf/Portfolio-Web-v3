interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <p className="text-panda-text mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
      {title}
    </p>
  );
};

export default Title;
