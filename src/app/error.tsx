"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">
        Something went wrong 😢
      </h1>
      <p className="mt-2">Don't worry, let's try again!</p>
      <button
        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
        onClick={() => reset()}
      >
        Reload Page 🔄
      </button>
    </div>
  );
}
