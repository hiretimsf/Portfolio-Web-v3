import PhotoGallery from "@/components/shared/photo-gallery";
import hobbyPhotos from "@/constants/hobby";

export default function Marathon() {
  return <PhotoGallery photos={hobbyPhotos} />;
}
