import { z } from "zod";
import { CONFIG, type Ids } from "@/config";
import { serverClient } from "@/lib/trpc/client";
import { getScore, transformData } from "@/lib/utils";
import Results from "@/components/tables/results";

const ParamsSchema = z.object({
  dataIds: z
    .array(z.string())
    .refine((values) =>
      values.every((value) => CONFIG[value as Ids] !== undefined),
    ),
});

export default async function ResultPage({
  searchParams,
}: {
  searchParams: unknown;
}) {
  const { dataIds } = ParamsSchema.parse(searchParams) as { dataIds: Ids[] };
  const promises = dataIds.map((id) => serverClient.getData(id));
  const allData = await Promise.all(promises);
  const allCountryData = transformData(allData);
  const scores = getScore(allCountryData, dataIds);

  return <Results scores={scores} />;
}
