"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const buttonTitle = "Try again";
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto h-12 w-12 text-red-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Oops, something went wrong!
        </h1>
        <p className="mt-4 text-gray-500">
          We apologize for the inconvenience. Please try again later.
        </p>
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Error message:
            <br />
            {error.message}
          </p>
          <button
            type="button"
            onClick={reset}
            className="group relative mt-6 inline-flex items-center justify-center gap-x-1 rounded-md bg-linear-to-br from-blue-500 to-blue-600 px-3 py-2 font-semibold text-white shadow-md transition hover:scale-[0.98] active:scale-[0.95]"
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
}
