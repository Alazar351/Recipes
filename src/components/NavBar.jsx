import "../styles/NavBar.css";
import Search from "./Search.jsx";
import NavItem from "./NavItem.jsx";
import PropTypes from "prop-types";
const NavBar = () => (
  <nav className="nav">
    <Search />
    <ul className="navUl">
      <NavItem targetUrl="/" text="Dashboard" />
      <NavItem targetUrl="/discover" text="Discover Recipes" />
      <NavItem targetUrl="/favorite" text="My Recipes" />
    </ul>
  </nav>
);

NavBar.propTypes = {
  open: PropTypes.bool,
};
export default NavBar;
