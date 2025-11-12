import DotsBackground from "@/components/shared/dots-background";
import MasonryGrid from "@/components/shared/masonry-grid";
import ShoutoutItem from "@/components/shared/shoutout-item";
import { Shoutout } from "@/types";

type TestimonialsProps = {
  shoutouts: Shoutout[];
};

export default function Testimonials({ shoutouts }: TestimonialsProps) {
  return (
    <MasonryGrid className="relative mx-auto max-w-7xl border-b border-gray-200 px-6 py-8 lg:px-8">
      {shoutouts.map((item: Shoutout, index: number) => (
        <ShoutoutItem key={`${item.type}-${index}`} item={item} index={index} />
      ))}
      <DotsBackground gridId="testimonials" className="text-gray-400" />
    </MasonryGrid>
  );
}
