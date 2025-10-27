import dynamic from "next/dynamic";

const PhotoProvider = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoProvider),
  { ssr: false },
);
const PhotoView = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoView),
  { ssr: false },
);

interface PhotoGalleryProps {
  photos: Array<{
    src: string;
    alt: string;
    className?: string;
  }>;
}

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  return (
    <section
      className="relative mx-auto my-6 flex max-w-2xl px-6 text-center align-middle sm:my-12"
      aria-label="Personal photos gallery"
    >
      <div className="relative flex w-full items-center justify-center gap-3 sm:gap-6">
        <PhotoProvider>
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`animate-fade-in-up aspect-2/3 w-28 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-[200px] ${photo.className || ""}`}
            >
              <PhotoView src={photo.src}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full cursor-pointer rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                />
              </PhotoView>
            </div>
          ))}
        </PhotoProvider>
      </div>
    </section>
  );
};

export default PhotoGallery;
