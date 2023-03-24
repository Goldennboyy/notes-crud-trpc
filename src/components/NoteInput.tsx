import React, { useState } from "react";
// import { noteSchema } from "~/server/api/routers/notes";

import { api } from "~/utils/api";

function AddNote() {
  const [newNotes, setNotes] = useState<string>("");

  const trpc = api.useContext();

  const addNote = api.note.create.useMutation({
    onSuccess: async () => {
      await trpc.note.getAll.invalidate();
    },
  });

  console.log(newNotes);

  function handleSubmit() {
    addNote.mutate({
      text: newNotes,
    });
    setNotes(""); // remove the set value in the input
  }

  return (
    <section>
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
            type="button"
            className="btn-primary btn mx-auto max-w-md items-center justify-center"
            onClick={handleSubmit}
            disabled={newNotes.length === 0}
          >
            Add note
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddNote;
