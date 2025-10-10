import Image from "next/image";

interface ImageOneProps {
  imageUrl: string;
  description: string;
}

const ImageOne = ({ imageUrl, description }: ImageOneProps) => {
  return (
    <Image
      alt={description}
      src={imageUrl}
      width={1000}
      height={1000}
      className="w-full max-w-none rounded-xl"
    />
  );
};

export default ImageOne;
