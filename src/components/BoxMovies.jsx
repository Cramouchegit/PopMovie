import { useState } from "react";
import PropTypes from "prop-types";

function BoxMovies({ element }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && element}
    </div>
  );
}

BoxMovies.propTypes = {
  element: PropTypes.element,
};

export default BoxMovies;
