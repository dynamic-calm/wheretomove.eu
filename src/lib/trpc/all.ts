import { IDS } from "@/config";
import { transformData } from "../utils";
import { serverClient } from "./client";

export default async function getAllData() {
  const promises = Object.values(IDS).map((id) => serverClient.getData(id));
  const allData = await Promise.all(promises);
  return transformData(allData);
}
