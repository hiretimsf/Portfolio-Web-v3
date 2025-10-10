interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => {
  return <p className="text-panda-muted mt-6 text-lg/8">{description}</p>;
};

export default Description;
