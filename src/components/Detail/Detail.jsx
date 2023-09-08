import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css";

const DetailCharacter = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const urlBase = "https://rickandmortyapi.com/api";
    axios(`${urlBase}/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.descriptionContainer}>        
        <div className={styles.h1Div}>
          <h1 className={styles.h2Contaniner}>
            <span className={styles.nameSpan}>{character?.name}</span>
          </h1>
        </div>
        <div className={styles.containerDetail}>
          <h2 className={styles.h2Detail}>
            Estado - <span className={styles.span}>{character?.status}</span>
          </h2>
          <h2 className={styles.h2Detail}>
            Especie - <span className={styles.span}>{character?.species}</span>
          </h2>
          <h2 className={styles.h2Detail}>
            Género - <span className={styles.span}>{character?.gender}</span>
          </h2>
          <h2 className={styles.h2Detail}>
            Origen -{" "}
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
  );
};

export default DetailCharacter;
