import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";

// Optimize tweet caching with better error handling and revalidation
const getTweet = unstable_cache(
  async (id: string) => {
    try {
      const tweet = await _getTweet(id);
      if (!tweet) {
        console.warn(`Tweet ${id} not found`);
        return null;
      }
      return tweet;
    } catch (error) {
      console.error(`Failed to fetch tweet ${id}:`, error);
      return null;
    }
  },
  ["tweet"],
  { revalidate: 3600 * 24 }, // Cache for 24 hours
);

// Separate tweet component for better organization
const TweetPage = async ({ id }: { id: string }) => {
  const tweet = await getTweet(id);
  if (!tweet) {
    return <TweetNotFound />;
  }
  return <EmbeddedTweet tweet={tweet} />;
};

// Predefined tweet IDs for better maintainability
const TWEET_IDS = [
  "1930094628885471387",
  "1916331166984245599",

  "1949919177437003788",
  "1932667733964886198",
] as const;
const Shoutouts = () => {
  return (
    <div className="mx-auto mt-4 grid grid-cols-1 gap-4 px-4 md:grid-cols-2">
      {TWEET_IDS.map((id, index) => (
        <div
          key={id}
          className="flex w-full flex-col items-center justify-center"
        >
          <Suspense fallback={<TweetSkeleton />}>
            <TweetPage id={id} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default Shoutouts;
