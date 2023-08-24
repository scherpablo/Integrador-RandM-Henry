/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
  const { id, name, status, species, gender, origin, image, onClose } = props;
  const handleClose = () => {
    onClose(id);
  };
  return (
    <div className={styles.container}>
      <img src={image} alt="Imagen del Personaje" className={styles.img} />
      <Link to={`/detail/${id}`} className={styles.link}>
        <h2 className={styles.h2Contaniner}>
          <span className={styles.nameSpan}>{name}</span>
        </h2>
      </Link>
      <h2>
        Estado: <span className={styles.span}>{status}</span>
      </h2>
      <h2>
        Especie: <span className={styles.span}>{species}</span>
      </h2>
      <h2>
        Género: <span className={styles.span}>{gender}</span>
      </h2>
      <h2>
        Origen: <span className={styles.span}>{origin.name}</span>
      </h2>
      <div className={styles.divButton}>
        <button onClick={handleClose} className={styles.button}>
          X
        </button>
      </div>
    </div>
  );
};

export default Card;
