"use client";
import { Suspense } from "react";
import Movies from "./Movies";

export const dynamic = "force-dynamic";

export default function MoviesPage() {
  return (
    <Suspense>
      <Movies />
    </Suspense>
  );
}
