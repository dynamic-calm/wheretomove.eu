import { z } from "zod";
import { IDS_SET, type Ids } from "@/config";
import { serverClient } from "@/trpc/client";

const ParamsSchema = z.object({
  dataIds: z
    .array(z.string())
    .refine((values) => values.every((value) => IDS_SET.has(value as Ids))),
});

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { dataIds } = ParamsSchema.parse(searchParams);

  const promises = dataIds.map((id) => {
    return serverClient.getData(id);
  });

  // const data = await serverClient.getData(parsed);
  return <div>{<h1>{JSON.stringify(dataIds)}</h1>}</div>;
}
