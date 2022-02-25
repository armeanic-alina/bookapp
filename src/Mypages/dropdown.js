import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";

const genres = [
  "Gothic Fiction ",
  "Movie Books",
  "Precursors of Science Fiction",
  "Science Fiction by Women",
];

const genresPath = ["gothic", "movie-books", "scfi", "scfi-women"];

const Dropdown = ({ submenus }) => {
  const [shownGenres, setShownGenres] = useState(false);

  const showGenres = () => {
    setShownGenres(!shownGenres);
  };
  return (
    <div className="genres-container">
      <div onClick={showGenres}>
        Genres
        <img src={arrow} width={16} alt={""}/>
      </div>
      {shownGenres &&
        genres.map((genre, index) => (
          <Link  key={index} to={genresPath[index]}>{genre} </Link>
        ))}
    </div>
  );
};

export default Dropdown;
