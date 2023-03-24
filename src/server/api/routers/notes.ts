import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const noteSchema = z.object({
  text: z.string().min(2, { message: "Please add more than 2 caracters" }),
});

export const notesRouter = createTRPCRouter({
  create: publicProcedure.input(noteSchema).mutation(async ({ input, ctx }) => {
    const note = await ctx.prisma.note.create({
      data: {
        text: input.text,
      },
    });
    return note;
  }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const notes = await ctx.prisma.note.findMany();
    return notes;
  }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const note = await ctx.prisma.note.delete({
        where: {
          id: input.id,
        },
      });

      return note;
    }),
});
