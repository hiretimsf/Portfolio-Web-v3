import MasonryGrid from "@/components/pages/home/MasonryGrid";
import { Suspense } from "react";
import { Tweet, TweetSkeleton } from "react-tweet";

const items = [
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/OHo64fiWx2k?si=SXXvnFihiE2I8l-V&start=811",
  },
  {
    type: "youtube",
    url: "https://www.youtube.com/embed/wfL5arWfeOw?si=DtkvYb_HV8HAXLbx&start=2866",
  },
  { type: "tweet", id: "1930094628885471387" },
  { type: "tweet", id: "1916331166984245599" },
  { type: "tweet", id: "1932667733964886198" },
  { type: "tweet", id: "1937084213175456041" },
  { type: "tweet", id: "1949919177437003788" },
  { type: "tweet", id: "1930622440578732190" },
];

export default function Shoutouts() {
  return (
    <MasonryGrid>
      {items.map((item, index) => (
        <div
          key={`${item.type}-${index}`}
          className="rounded-xl bg-white p-2 shadow-sm dark:bg-neutral-900"
        >
          {item.type === "tweet" ? (
            <Suspense fallback={<TweetSkeleton />}>
              <Tweet id={item.id!} />
            </Suspense>
          ) : (
            <iframe
              src={item.url}
              className="aspect-video w-full rounded-xl"
              allowFullScreen
              title="YouTube video"
            />
          )}
        </div>
      ))}
    </MasonryGrid>
  );
}
