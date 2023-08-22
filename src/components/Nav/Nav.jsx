/* eslint-disable react/prop-types */
import SearchBar from "../SearchBar/SearchBar.jsx";
// import styles from "./Nav.module.css";

const Nav = ({ onSearch, onRandomAdd }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} onRandomAdd={onRandomAdd} />
    </div>
  );
};

export default Nav;
