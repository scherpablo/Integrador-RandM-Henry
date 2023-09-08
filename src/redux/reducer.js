import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHARACTER_DETAIL } from "./actionsTypes";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  characterDetail: {},
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      let copy1 = [...state.allCharacters];
      copy1.push(payload);
      return {
        ...state,
        myFavorites: copy1,
        allCharacters: copy1,
      };
    case REMOVE_FAV:
      let copy2 = state.myFavorites.filter(
        (character) => character.id !== payload
      );
      return {
        ...state,
        myFavorites: copy2,
      };
    case FILTER:
      let copy3 = state.allCharacters.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: copy3,
      };
    case ORDER:
      let copy4 = state.allCharacters.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else if (payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: copy4,
      };
      case GET_CHARACTER_DETAIL:
        return {
          ...state,
          characterDetail: payload,
        }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
