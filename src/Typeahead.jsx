import React from "react";

const Typeahead = (props) => {
  // console.log(props);
  const { suggestionList, displayMovie } = props;
  const suggestions = suggestionList.filter((movie, index) => index < 5);
  if (suggestionList)
    return suggestions.map((movie, index) => {
      console.log(movie);
      return (
        // console.log(movie.name)
        <li
          onClick={displayMovie}
          id={movie.movieId}
          key={index+1}
          className="db pointer dim pa2"
        >
          {movie.name}
        </li>
      );
    });
};

export default Typeahead;
