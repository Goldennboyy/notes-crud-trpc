import React, { useState } from "react";
import { z } from "zod";
import { noteSchema, noteInput } from "~/server/api/routers/notes";

import { api } from "~/utils/api";

function AddNote() {
  const [newNotes, setNotes] = useState<string>("");

  const trpc = api.useContext();

  const addNote = api.note.create.useMutation();

  console.log(newNotes);

  function handleSubmit() {
    const result = noteSchema.safeParse(newNotes);
    if (!result.success) {
      const err = result.error.format()._errors.join("\n");
      console.log(err);
      return;
    }
    // create note mutation
    addNote.mutate({
      text: newNotes,
    });
  }

  return (
    <section className="container mx-auto min-h-screen max-w-5xl items-center justify-center px-6">
      <div className="mt-10">
        <h1 className="text-center text-3xl">Notes - C.R.U.D W/ TRPC</h1>
      </div>
      <div className="pt-24">
        <div className="flex w-full flex-col gap-y-4 border p-10">
          <label className="text-xl" htmlFor="note">
            Create New Note
          </label>
          <textarea
            name="note"
            value={newNotes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
          <button
            className="btn-primary btn mx-auto max-w-md items-center justify-center"
            onClick={handleSubmit}
          >
            Add note
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddNote;
