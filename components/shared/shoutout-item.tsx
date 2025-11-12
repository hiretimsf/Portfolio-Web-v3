"use client";

import { Shoutout } from "@/types";
import { memo, useState } from "react";
import { Tweet } from "react-tweet";

// Type guard for Shoutout
function isTweetShoutout(
  item: Shoutout,
): item is Shoutout & { type: "tweet"; id: string } {
  return item.type === "tweet" && typeof item.id === "string";
}

type ShoutoutItemProps = {
  item: Shoutout;
  index: number;
};

export default memo(function ShoutoutItem({ item, index }: ShoutoutItemProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="rounded-xl bg-gray-100 p-4 text-center">
        <p className="text-panda-text">Content unavailable</p>
      </div>
    );
  }

  return (
    <div key={`${item.type}-${index}`} className="rounded-xl">
      {isTweetShoutout(item) ? (
        <Tweet id={item.id} onError={() => setHasError(true)} />
      ) : (
        <iframe
          src={item.url}
          className="aspect-video w-full rounded-xl"
          allowFullScreen
          title="YouTube video"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
});
