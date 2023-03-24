import React from "react";
import { api } from "~/utils/api";
import NoteModal from "./NoteModal";
import { type Note } from "~/types/interface";

function Note(note: Note) {
  const trpc = api.useContext();

  const deleteNote = api.note.delete.useMutation({
    onSuccess: async () => {
      await trpc.note.getAll.invalidate();
    },
  });

  function handleDeleteNote() {
    deleteNote.mutate({
      id: note.id,
    });
  }

  return (
    <div className="items-center justify-center text-center">
      <div className="-gap-8 mt-8 flex flex-row rounded-lg border p-10 ">
        <div className="w-3/5">
          <p className="mx-32 mt-2 w-max text-lg font-bold">{note.text}</p>
        </div>
        <div className="w-4/5 ">
          <div className="flex flex-row gap-3">
            <button
              className="btn w-16 bg-red-600 pb-2  text-white"
              type="button"
              onClick={handleDeleteNote}
            >
              delete
            </button>
            <NoteModal {...note} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
