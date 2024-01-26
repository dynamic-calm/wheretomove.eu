import { httpBatchLink } from "@trpc/client";
import { appRouter } from "./router";
import { createCallerFactory } from "./init";

export const createCaller = createCallerFactory(appRouter);
export const serverClient = createCaller({
  links: [httpBatchLink({ url: "/api/trpc" })],
});
