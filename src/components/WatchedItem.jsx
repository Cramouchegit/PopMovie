import PropTypes from "prop-types";

function WatchedItem({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🎬</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}

WatchedItem.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    imdbRating: PropTypes.number,
    userRating: PropTypes.number,
    runtime: PropTypes.number,
  }),
};

export default WatchedItem;
