import { z } from "zod";
import { IDS_SET, type Ids } from "@/config";
import { serverClient } from "@/trpc/client";
import { getTopFive, transformData } from "@/lib/utils";

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
  const allData = await Promise.all(promises);
  const allCountryData = transformData(allData);
  const topFive = getTopFive(allCountryData);

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-left">
      <div>
        <p>
          {"The winner is "}
          <span className="font-bold">{topFive.at(0)?.country}</span>
        </p>
        <p className="text-sm">Followed by: </p>
        <ul className="text-sm font-semibold">
          {topFive.slice(1).map(({ country }) => (
            <li key={country} className="pl-6">{`- ${country}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
