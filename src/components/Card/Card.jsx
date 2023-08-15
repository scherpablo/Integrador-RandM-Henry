/* eslint-disable react/prop-types */
import styles from "./Card.module.css"; 

export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose } = props;
  return (
    <div className={styles.container}>
      <img src={image} alt="Imagen del Personaje" className={styles.img} />
      <h2>Nombre: <span className={styles.span}>{name}</span></h2>
      <h2>Estado: <span className={styles.span}>{status}</span></h2>
      <h2>Especie: <span className={styles.span}>{species}</span></h2>
      <h2>Género: <span className={styles.span}>{gender}</span></h2>
      <h2>Origen: <span className={styles.span}>{origin.name}</span></h2>
      <button onClick={onClose} className={styles.button}>X</button>      
    </div>
  );
}
