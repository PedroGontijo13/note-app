import NoteList from "./Components/NoteList";
import Search from "./Components/Search";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
    console.log(term)
  };

  return (
    <div className="container">
      <Search handleSearch={handleSearch} />
      <NoteList searchValue={searchTerm} />
    </div>
  );
};

export default App;
