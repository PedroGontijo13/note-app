import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [characterCount, setCharacterCount] = useState(200);
  const characterLimit = 200;

  const handleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= characterLimit) {
      setNoteText(inputText);
      setCharacterCount(characterLimit - inputText.length);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
      setCharacterCount(characterLimit);
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterCount} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
