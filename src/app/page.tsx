import Search from "@/components/custom/Search";

export default function Home() {
  return (
    <main className="container flex min-h-dvh items-center justify-center">
      <section className="grid grid-rows-3 gap-4 py-2 sm:gap-8">
        <h1 className="text-center text-5xl font-bold sm:text-9xl">Woogle</h1>
        <Search />
      </section>
    </main>
  );
}
