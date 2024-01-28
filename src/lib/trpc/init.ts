import { initTRPC } from "@trpc/server";

export const {
  router,
  createCallerFactory,
  procedure: publicProcedure,
} = initTRPC.create();
