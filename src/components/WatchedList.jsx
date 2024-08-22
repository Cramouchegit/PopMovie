import PropTypes from "prop-types";
import WatchedItem from "./WatchedItem.jsx";

function WatchedList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie, index) => (
        <WatchedItem key={index} movie={movie} />
      ))}
    </ul>
  );
}

WatchedList.propTypes = {
  watched: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WatchedList;
