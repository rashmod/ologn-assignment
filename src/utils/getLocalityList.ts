import { readFile } from "fs/promises";
import { Locality } from "@/utils/getLocality";

export default async function getLocalityList() {
  const file = await readFile(process.cwd() + "/data/locality.json", "utf8");
  const localityList = JSON.parse(file);

  return localityList as Locality[];
}
