import QUERIES from "./queries";
import { IDS } from "@/config";
import { transformData } from "./utils";
import type { Ids } from "@/config";

export default async function getAllData() {
  const promises = Object.values(IDS).map(async (id) => await getData(id));
  const allData = await Promise.all(promises);
  return transformData(allData);
}

export async function getData(id: string) {
  const query = QUERIES.get(id as Ids)!;
  return await query();
}
