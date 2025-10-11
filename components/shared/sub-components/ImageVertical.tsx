import Image from "next/image";

interface ImageVerticalProps {
  imageUrl: string;
  description: string;
}

const ImageVertical = ({ imageUrl, description }: ImageVerticalProps) => {
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

export default ImageVertical;
