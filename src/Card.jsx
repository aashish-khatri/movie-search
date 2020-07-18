import React from "react";
import Poster from './poster-alt.jpg'
const Card = (props) => {
  const { data } = props;
  let posterPath = data.poster? "https://image.tmdb.org/t/p/w500" + data.poster: Poster;
  return (
    <div className="container pv3-ns bt-ns b--grey white-90 w-70 mw7-ns center mt3 mb5 mv4-ns ">
      <div className="poster-container mv2 fl-ns w-30-ns">
        <img className="poster" alt={Poster} src={posterPath} />
      </div>
      <div className="content pl4-ns pr3-ns fl-ns w-70-ns f5 measure">
        <h1 className="ma0 white-90 f2 ttu"> {data.original_title} </h1>
        <span className="light-blue f5">{data.tagline}</span>
        <p>{data.overview}</p>
        <div className="extra-content mt4">
          <div className="genre-details">
            <span className="ttc light-blue db">{data.genres}</span>
            <span>{data.production}</span>
          </div>
          <div className="other-details light-blue f5 mt4">
            <div className="fl w-50 ">
              Original Release:
              <span className="f3 db white-80">{data.release?data.release:'N/A'}</span>
            </div>
            <div className=" fl w-50">
              Running Time:
              <span className="f3 db white-80">{data.runtime? data.runtime + ' mins': 'N/A'}</span>
            </div>
            <div className=" mt3 dib w-50">
              Box Office:
              <span className="f3 db white-80">{data.revenue? '$'+data.revenue: "N/A"}</span>
            </div>
            <div className="dib w-50">
              Vote Average:
              <span className="f3 db white-80">{data.vote?data.vote+'/ 10': 'N/A'} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
