import { z } from "zod";
import { Ids } from "@/config";
import { publicProcedure, router } from "./init";
import QUERIES from "./queries";

export const appRouter = router({
  getData: publicProcedure
    .input(z.string())
    .query(async (opts) => getData(opts.input)),
});

async function getData(id: string) {
  const query = QUERIES.get(id as Ids)!;
  return query();
}

export type AppRouter = typeof appRouter;
