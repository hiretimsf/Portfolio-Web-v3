"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dynamic from "next/dynamic";
import * as React from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

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

const PhotoGalleryDesktop = ({ photos }: PhotoGalleryProps) => {
  return (
    <section
      className="relative mx-auto my-6 flex max-w-2xl px-6 text-center align-middle sm:my-12"
      aria-label="Personal photos gallery"
    >
      <PhotoProvider>
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {photos.map((photo, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <div
                    className={`animate-fade-in-up aspect-2/3 rounded-xl ${photo.className || ""}`}
                  >
                    <PhotoView src={photo.src}>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full cursor-pointer rounded-xl object-cover"
                      />
                    </PhotoView>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {photos.length > 3 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </PhotoProvider>
    </section>
  );
};

const PhotoGalleryMobile = ({ photos }: PhotoGalleryProps) => {
  return (
    <section
      className="relative mx-auto my-6 flex max-w-2xl px-6 text-center align-middle sm:my-12"
      aria-label="Personal photos gallery"
    >
      <PhotoProvider>
        <Carousel className="mx-auto w-full max-w-xs p-2">
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div
                    className={`animate-fade-in-up aspect-2/3 rounded-xl ${photo.className || ""}`}
                  >
                    <PhotoView src={photo.src}>
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full cursor-pointer rounded-xl object-cover"
                      />
                    </PhotoView>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {photos.length > 1 && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </PhotoProvider>
    </section>
  );
};

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (isMobile) {
    return <PhotoGalleryMobile photos={photos} />;
  }

  return <PhotoGalleryDesktop photos={photos} />;
};

export default PhotoGallery;
