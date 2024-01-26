import { COUNTRIES, IDS, type Ids } from "@/config";
import { serverClient } from "@/trpc/client";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!areCorrect(searchParams)) {
    // TODO: Handle incorrect params
  }

  const message = await serverClient.getTodos();
  const data = await serverClient.getData();

  return (
    <div>
      <h1>{message}</h1>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
}


type Params = Record<Ids, "true">;

function areCorrect(params: {
  [key: string]: string | string[] | undefined;
}): params is Params {
  return Object.entries(params).every(
    ([key, value]) => IDS.has(key) && value === "true",
  );
}
