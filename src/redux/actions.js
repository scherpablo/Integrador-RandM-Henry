import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  GET_CHARACTER_DETAIL,
} from "./actionsTypes";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};
const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};
const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};
const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
const getCharacterDetail = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios (`${baseUrl}/character/${id}`);
      dispatch({
        type: GET_CHARACTER_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error al obtener detalles del personaje:", error);
    }
  }
}

// const getCharacterDetail = (id) => {
//   return function (dispatch) {
//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//       .then((response) => response.json())
//       .then((data) => dispatch({ type: GET_CHARACTER_DETAIL, payload: data }));
//   };
// };

export { addFav, removeFav, filterCards, orderCards, getCharacterDetail };
