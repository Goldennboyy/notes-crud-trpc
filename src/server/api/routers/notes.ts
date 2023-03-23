import { AppRouter } from "./../root";
import { inferRouterOutputs } from "@trpc/server";
import { RouterInputs } from "./../../../utils/api";
import { TypeOf, ZodType, z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { Note } from "@prisma/client";

export const noteSchema = z.object({
  text: z.string().min(2, { message: "Please add more than 2 caracters" }),
});

export type noteInput = TypeOf<typeof noteSchema>;

// type RouterOutputs = inferRouterOutputs<AppRouter>;
// type allNotesOutputs = RouterOutputs["notes"]["getAll"];

// export type Note = allNotesOutputs[number]; // this is the data to be exported

export const notesRouter = createTRPCRouter({
  create: publicProcedure.input(noteSchema).mutation(async ({ input, ctx }) => {
    return ctx.prisma.note.create({
      data: {
        text: input.text,
      },
    });
  }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.note.findMany();
  }),
});
