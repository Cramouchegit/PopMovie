import PropTypes from "prop-types";
import MovieItem from "./MovieItem.jsx";

function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
