import Image from "next/image";

interface ImageHorizontalProps {
  imageUrl: string;
  description: string;
}

const ImageHorizontal = ({ imageUrl, description }: ImageHorizontalProps) => {
  return (
    <Image
      alt={description}
      src={imageUrl}
      width={1000}
      height={500}
      className="w-full max-w-none"
    />
  );
};

export default ImageHorizontal;
