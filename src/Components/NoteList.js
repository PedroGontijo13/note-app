import { useEffect, useState } from "react";
import Note from "./Note";
import AddNote from "./AddNote";
import { nanoid } from "nanoid";

const NoteList = ({ searchValue }) => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note",
      date: new Date(),
    },
    {
      id: nanoid(),
      text: "First note",
      date: new Date(),
    },
    {
      id: nanoid(),
      text: "First note",
      date: new Date(),
    },
    {
      id: nanoid(),
      text: "First note",
      date: new Date(),
    },
  ]);

  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString,
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="notes-list">
      {filteredNotes.map((note) => {
        return <Note key={note.id} note={note} deleteNote={deleteNote} />;
      })}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NoteList;
