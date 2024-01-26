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
  searchParams: unknown;
}) {
  const { dataIds } = ParamsSchema.parse(searchParams);
  const promises = dataIds.map((id) => serverClient.getData(id));
  const data = await Promise.all(promises);
  const topFive = calculateTopFive(data);

  return (
    <div>
      <pre className="flex items-center justify-center">
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
}

type Data = Awaited<ReturnType<typeof serverClient.getData>>;

function calculateTopFive(data: Data[]) {
  return 3;
}
