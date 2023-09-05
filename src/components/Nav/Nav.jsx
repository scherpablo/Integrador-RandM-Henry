import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css";

const Nav = ({ onSearch, onRandomAdd, logout }) => {
  return (
    <div className={styles.navContainer}>
      <SearchBar onSearch={onSearch} onRandomAdd={onRandomAdd} logout={logout} />
    </div>
  );
};

export default Nav;
