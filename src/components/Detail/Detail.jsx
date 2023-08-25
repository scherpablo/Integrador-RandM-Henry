import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.module.css";

const DetailCharacter = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.nameContainer}>
        <div className={styles.h1Div}>
          <h1 className={styles.h2Contaniner}>
            <span className={styles.nameSpan}>{character?.name}</span>
          </h1>
        </div>

        <div className={styles.containerDetail}>
          <h2 className={styles.h2Detail}>
            Estado: <span className={styles.span}>{character?.status}</span>
          </h2>
          <h2 className={styles.h2Detail}>
            Especie: <span className={styles.span}>{character?.species}</span>
          </h2>
          <h2 className={styles.h2Detail}>
            Género: <span className={styles.span}>{character?.gender}</span>
          </h2>
          <h2 className={styles.h2Detail}>
            Origen:{" "}
            <span className={styles.span}>{character.origin?.name}</span>
          </h2>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={character?.image}
          alt="Imagen del Personaje"
          className={styles.imgDetail}
        />
      </div>
    </div>
    // <div className={styles.container}>
    //   <img src={character?.image} alt="Imagen del Personaje" className={styles.img} />
    //     <h2 className={styles.h2Contaniner}>
    //       <span className={styles.nameSpan}>{character?.name}</span>
    //     </h2>
    //   <h2>
    //     Estado: <span className={styles.span}>{character?.status}</span>
    //   </h2>
    //   <h2>
    //     Especie: <span className={styles.span}>{character?.species}</span>
    //   </h2>
    //   <h2>
    //     Género: <span className={styles.span}>{character?.gender}</span>
    //   </h2>
    //   <h2>
    //     Origen: <span className={styles.span}>{character.origin?.name}</span>
    //   </h2>
    // </div>
  );
};

export default DetailCharacter;
