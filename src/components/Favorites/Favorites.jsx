/* eslint-disable react-refresh/only-export-components */
import { connect } from "react-redux";
import Card from "../Card/Card";
import styles from "./Favorites.module.css";

const Favorites = (props) => {
  const { myFavorites } = props;

  return (
    <div className={styles.container}>
      {myFavorites.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
