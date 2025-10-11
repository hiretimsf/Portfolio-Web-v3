interface DescriptionProps {
  children: React.ReactNode;
}

const Description = ({ children }: DescriptionProps) => {
  return <p className="text-panda-text mt-6 text-lg/8">{children}</p>;
};

export default Description;
