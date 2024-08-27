import { readFile } from "fs/promises";
import { Locality } from "@/utils/getLocality";

export default async function getLocalityList() {
  console.log(process.cwd());
  const file = await readFile(
    process.cwd() + "/src/data/locality.json",
    "utf8",
  );
  const localityList = JSON.parse(file);

  return localityList as Locality[];
}
