/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, onRandomAdd }) => {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  }

  const handleSearch = () => {
    onSearch(id);
    setId("");
  };

  return (
    <div className={styles.container}>
      <NavLink to={PATHROUTES.ABOUT}>
        <button className={styles.buttonRandom}>About</button>
      </NavLink>
      <Link to={PATHROUTES.HOME}>
        <button className={styles.buttonAdd}>Home</button>
      </Link>
      <input
        type="search"
        className={styles.input}
        placeholder="ingresa el id aquí...🔍"
        value={id}
        onChange={handleChange}
      />
      <button onClick={handleSearch} className={styles.buttonAdd}>
        Agregar
      </button>
      <button onClick={onRandomAdd} className={styles.buttonRandom}>
        Random
      </button>
    </div>
  );
};

export default SearchBar;