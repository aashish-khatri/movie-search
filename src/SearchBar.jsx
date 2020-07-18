import React from "react";
import "./App.css";
import logo from "./logo.svg";
import SearchBox from "./SearchBox";
import Typeahead from "./Typeahead";

const SearchBar = (props) => {
  // console.log(suggestions, "d")
  const { suggestionList, handleSearch, displayMovie } = props;
  return (
    <div className="relative center mt5-ns mt3 w-70-ns mw7-ns db">
      <a
        href="https://github.com/aashish-khatri/movie-search"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className="h3 logo db dib-ns center" 
        src={logo} alt="logo" />
      </a>
      <div className="w-50-ns mt3 w-80 center absolute-ns bottom-0 right-0">
        <SearchBox handleSearch={handleSearch} />
        <ul
          style={{ listStyleType: "none" }}
          className=" typeahead white measure-wide f5 absolute z-1 bg-black w-80 w-100-ns center "
        >
          <Typeahead
            suggestionList={suggestionList}
            displayMovie={displayMovie}
          />
        </ul>
      </div>
    </div>
  );
};
export default SearchBar;
