import React from "react";
import "./App.css";

const SearchBox = ({ handleSearch }) => {
  return (
    <input
      type="search"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="off"
      className="white-90 w-100 pa1 o-60 glow f5 bn bg-inherit"
      placeholder="Movie to search.."
      name="searchbox"
      onChange={handleSearch}
      id="searchbox"
    />
  );
};
export default SearchBox;
