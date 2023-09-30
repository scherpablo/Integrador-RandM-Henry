import axios from "axios";
import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  GET_CHARACTER_DETAIL,
} from "./actionsTypes";

const baseUrl = import.meta.env.VITE_BASE_URL;
const favUrl = import.meta.env.VITE_FAV_URL;

const addFav = (character) => {
  // const endpoint = "http://localhost:3001/rickandmorty/fav";
  // const endpoint = favUrl;
  return (dispatch) => {
    axios.post(favUrl, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

const removeFav = (id) => {
  // const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  const endpoint = favUrl + "/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
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
      const response = await axios(`${baseUrl}/character/${id}`);
      dispatch({
        type: GET_CHARACTER_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error al obtener detalles del personaje:", error);
    }
  };
};

export { addFav, removeFav, filterCards, orderCards, getCharacterDetail };
