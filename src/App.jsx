import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Component } from "react";
import Card from "./Card";
import "tachyons";
import "./App.css";
import { RollBoxLoading } from "react-loadingg";

class App extends Component {
  state = {
    id: 550,
    suggestions: [],
    cursor: 1,
    profileExist: false,
  };

  displayMovie = (event) => {
    this.setState({ id: event.target.id, suggestions: [] });
  };

  handleSearch = (event) => {
    const QUERY = event.target.value;
    const SEARCH_URI = "https://api.themoviedb.org/3/search/movie";
    if (!QUERY) {
      this.setState({ suggestions: [] });
    } else {
      fetch(
        `${SEARCH_URI}?query=${QUERY}&api_key=002c3b653218f797a209fa59117662dd`
      )
        .then((resp) => resp.json())
        .catch((error) => console.log(error))
        .then((items) => {
          console.log(items);
          const movieList = items.results.map((i) => ({
            movieId: i.id,
            name: i.title,
          }));
          this.setState({ suggestions: movieList });
        })
        .catch((error) => console.log(error));
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.fetchAPI();
    }
  }
  fetchAPI = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.state.id}?api_key=002c3b653218f797a209fa59117662dd`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          movieID: data.id,
          original_title: data.original_title,
          tagline: data.tagline,
          overview: data.overview,
          homepage: data.homepage,
          poster: data.poster_path,
          production: arrayToString(data.production_companies),
          production_countries: data.production_countries,
          genres: arrayToString(data.genres),
          release: data.release_date,
          vote: data.vote_average,
          runtime: data.runtime,
          revenue: data.revenue,
          backdrop: data.backdrop_path,
        })
      );
    const arrayToString = (array) => array.map((item) => item.name).join(", ");
    this.setState({ profileExist: false });
    setTimeout(() => {
      this.setState({ profileExist: true });
    }, 1000);
  };
  componentDidMount() {
    this.fetchAPI();
    this.setState({ profileExist: false });
    setTimeout(() => {
      this.setState({ profileExist: true });
    }, 1000);
  }

  render() {
    const numbers = 1;
    const { suggestions } = this.state;
    return this.state.profileExist === false ? (
      <RollBoxLoading className="" speed={numbers} />
    ) : (
      <div className="">
        <SearchBar
          handleSearch={this.handleSearch}
          suggestionList={suggestions}
          displayMovie={this.displayMovie}
        />
        <Card data={this.state} />
      </div>
    );
  }
}

export default App;
