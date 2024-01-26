import { z } from "zod";
import { publicProcedure, router } from "./init";

export const appRouter = router({
  getData: publicProcedure
    .input(z.string())
    .query(async (opts) => getData(opts.input)),
});

async function getData(id: string) {
  return id;
}

export type AppRouter = typeof appRouter;
