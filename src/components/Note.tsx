import React from "react";
import { api } from "~/utils/api";
// import { Note } from "@prisma/client";

interface Note {
  id: string;
  text: string;
  createdAt?: string;
  updatedAt?: string;
}

function Note({ text, id }: Note) {
  const trpc = api.useContext();

  const deleteNote = api.note.delete.useMutation({
    onSuccess: async () => {
      await trpc.note.getAll.invalidate();
    },
  });

  function handleDeleteNote() {
    deleteNote.mutate({
      id: id,
    });
  }

  return (
    <div className="items-center justify-center text-center">
      <div className="-gap-8 mt-8 flex flex-1 border p-10 ">
        <div className="w-3/5">
          <p className="mx-32 mt-2 w-max text-lg font-bold">{text}</p>
        </div>
        <div className="w-4/5">
          <button
            className="btn w-16 bg-red-600 pb-2  text-white"
            type="button"
            onClick={handleDeleteNote}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
