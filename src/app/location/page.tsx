import { Suspense } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import Weather from "@/components/custom/Weather";
import Search from "@/components/custom/Search";

export default function Page({
  searchParams,
}: {
  searchParams?: { locality?: string };
}) {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-center">
      <section className="flex flex-1 flex-col gap-4 py-10">
        <Link
          href="/"
          className="flex w-min items-center gap-1 rounded-md border px-3 py-1 transition hover:bg-muted"
        >
          <ChevronLeft /> Back
        </Link>
        <Search />
        <Suspense fallback={<div>Loading...</div>}>
          <Weather localityId={searchParams?.locality || ""} />
        </Suspense>
      </section>
    </main>
  );
}
