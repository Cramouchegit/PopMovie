import PropTypes from "prop-types";

function NavBar({ children }) {
  return <nav className="nav-bar">{children}</nav>;
}

NavBar.propTypes = {
  children: PropTypes.node,
};

export default NavBar;
