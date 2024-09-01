import { MdSearch } from "react-icons/md";

const Search = ({ handleSearch }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default Search;
