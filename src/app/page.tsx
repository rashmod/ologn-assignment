import Search from "@/components/custom/Search";
import getLocalityList from "@/utils/getLocalityList";

export default async function Home() {
  const localityList = await getLocalityList();

  return (
    <main className="container flex min-h-dvh items-center justify-center">
      <section className="grid grid-rows-3 gap-4 py-2 sm:gap-8">
        <h1 className="text-center text-5xl font-bold sm:text-9xl">Woogle</h1>
        <Search localityList={localityList} />
      </section>
    </main>
  );
}
