import Search from "@/components/custom/Search";

export default function Home() {
  return (
    <main className="container flex min-h-screen items-center justify-center">
      <section className="grid grid-rows-3 gap-8 py-2">
        <h1 className="text-9xl font-bold">Woogle</h1>
        <Search />
      </section>
    </main>
  );
}
