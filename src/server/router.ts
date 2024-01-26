import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return "Hello world";
  }),
});

export type AppRouter = typeof appRouter;