import React from "react";
const Typeahead = (props) => {
	const { suggestionList, displayMovie } = props;
	const suggestions = suggestionList.filter((movie, index) => index < 5);
	if (suggestionList)
		return suggestions.map((movie, index) => {
			return (
				<li
					onClick={displayMovie}
					id={movie.movieId}
					key={index + 1}
					className="db pointer dim pa2"
				>
					{movie.name}
				</li>
			);
		});
};

export default Typeahead;
