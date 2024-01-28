import { IDS_SET } from "@/config";
import { transformData } from "../utils";
import { serverClient } from "./client";

export default async function getAllData() {
  const promises = [...IDS_SET].map((id) => serverClient.getData(id));
  const allData = await Promise.all(promises);
  return transformData(allData);
}
