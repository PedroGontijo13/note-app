import { MdDeleteForever } from "react-icons/md";

const Note = ({ note, deleteNote }) => {
  console.log(note);
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>Date</small>
        <MdDeleteForever onClick={() => deleteNote(note.id)} className="delete-icon" size="1.3em" />
      </div>
    </div>
  );
};

export default Note;
