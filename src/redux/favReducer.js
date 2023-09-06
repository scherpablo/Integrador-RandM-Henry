const initialState = {
  myFavorites: [],
};

const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      let copy1 = [...state.myFavorites];
      copy1.push(payload);
      return {
        ...state,
        myFavorites: copy1,
      };
    case "REMOVE_FAV":
      let copy2 = state.myFavorites.filter(
        (character) => character.id !== payload
      );
      return {
        ...state,
        myFavorites: copy2,
      };
    default:
      return {
        ...state,
      }
  }
};

export default favoritesReducer;
