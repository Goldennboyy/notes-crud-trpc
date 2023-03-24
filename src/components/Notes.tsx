import React from "react";
import { api } from "~/utils/api";
import Note from "~/components/Note";

function Notes() {
  const { data: notes } = api.note.getAll.useQuery();

  return (
    <div className="mt-10 items-center justify-center">
      <h1 className="text-center text-3xl">Notes List</h1>
      {notes?.map(({ text, id }, index) => {
        return <Note key={index} text={text} id={id} />;
      })}
    </div>
  );
}

export default Notes;
