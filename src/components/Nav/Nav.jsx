/* eslint-disable react/prop-types */
import SearchBar from "../SearchBar/SearchBar.jsx";
// import styles from "./Nav.module.css";

const Nav = ({ onSearch, onRandomAdd, logout }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} onRandomAdd={onRandomAdd} logout={logout} />
    </div>
  );
};

export default Nav;
