/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch, onRandomAdd }) => {
  const [id, setId] = useState("");

  //Crea una función handleChange de modo que, cada vez que el usuario escriba algo en el input, este se guarde en el estado local id.
  const handleChange = (e) => {
    setId(e.target.value);
  }

  const handleSearch = () => {
    onSearch(id);
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        className={styles.input}
        placeholder="tu busqueda aquí...🔍"
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