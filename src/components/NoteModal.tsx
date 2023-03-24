import React, { useState } from "react";
import { type Note } from "~/types/interface";
import { api } from "~/utils/api";

function NoteModal(note: Note) {
  const [noteText, setnoteText] = useState("");

  const trpc = api.useContext();

  const editNote = api.note.update.useMutation({
    onSuccess: async () => {
      await trpc.note.getAll.invalidate();
    },
  });

  function handleUpdate() {
    editNote.mutate({
      id: note.id,
      text: noteText,
    });
  }

  return (
    <div>
      <label
        htmlFor="my-modal-6"
        className="btn ml-8 w-16 bg-purple-600  pb-2 text-white"
      >
        edit
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#182236]">
          <h3 className="py-4 text-lg font-bold">Update the text note !</h3>
          <textarea
            className="bg-white text-black"
            value={noteText}
            onChange={(e) => setnoteText(e.target.value)}
          />
          <div className="py-5">
            <button onClick={handleUpdate} className="btn bg-purple-600">
              update
            </button>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn bg-red-500">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
