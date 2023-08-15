import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = ({ targetUrl, text }) => (
  <li className="nav-item">
    <Link to={targetUrl}>{text}</Link>
  </li>
);

NavItem.propTypes = {
  text: PropTypes.string,
  targetUrl: PropTypes.string,
};

export default NavItem;
