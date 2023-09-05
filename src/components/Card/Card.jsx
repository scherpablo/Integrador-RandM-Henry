/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import styles from "./Card.module.css";
import { useState, useEffect } from "react";

const Card = (props) => {
  const [isFav, setIsFav] = useState(false);
  const location = useLocation();

  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const handleClose = () => {
    onClose(id);
    removeFav(id);
  };

  const handleFav = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  const checkIsFav = () => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    setIsFav(checkIsFav());
  }, []);

  //   useEffect(() => {
  //     myFavorites.forEach((fav) => {
  //        if (fav.id === props.id) {
  //           setIsFav(true);
  //        }
  //     });
  //  }, [myFavorites]);

  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={handleFav} className={styles.heart}>❤️</button>
      ) : (
        <button onClick={handleFav} className={styles.heart}>🤍</button>
      )}
      <img src={image} alt="Imagen del Personaje" className={styles.img} />
      <Link to={`/detail/${id}`} className={styles.link}>
        <h2 className={styles.h2ContaninerCard}>
          <span className={styles.nameSpanCard}>{name}</span>
        </h2>
      </Link>
      {/* <h2 className={styles.h2Card}>
        Estado: <span className={styles.span}>{status}</span>
      </h2> */}
      <h2 className={styles.h2Card}>
        Especie: <span className={styles.span}>{species}</span>
      </h2>
      <h2 className={styles.h2Card}>
        Género: <span className={styles.span}>{gender}</span>
      </h2>
      {/* <h2 className={styles.h2Card}>
        Origen: <span className={styles.span}>{origin.name}</span>
      </h2> */}
      {location.pathname !== "/favorites" && ( // Verificar la ubicación actual
        <div className={styles.divButton}>
          <button onClick={handleClose} className={styles.button}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
