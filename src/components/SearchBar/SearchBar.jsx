/* eslint-disable react/prop-types */
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   return (
      <div className={styles.container}>
         <input type='search' className={styles.input} />
         <button onClick={props.onSearch} className={styles.button}>Agregar</button>
      </div>
   );
}
