// HOOKS
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
// COMPONENTES
import Nav from "./components/Nav/Nav.jsx";
// VIEWS
import Home from "./views/Home.view.jsx";
import About from "./views/About.view.jsx";
import Detail from "./views/Detail.view.jsx";
//HELPERS
import PATHROUTES from "./helpers/PathRoutes.js"; 

const App = () => {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          const isCharacterAdded = characters.some(
            (character) => character.id === data.id
          );

          if (isCharacterAdded) {
            window.alert("¡Este personaje ya está en la lista!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onRandomAdd = () => {
    const randomId = Math.floor(Math.random() * 826 + 1);
    onSearch(randomId);
  };

  const onClose = (id) => {
    setCharacters((prevCharacters) => {
      const updatedCharacters = prevCharacters.filter(
        (character) => character.id !== Number(id)
      );
      return updatedCharacters;
    });
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} onRandomAdd={onRandomAdd} />    
      <Routes>
        <Route
          path={PATHROUTES.HOME}
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path={PATHROUTES.ABOUT} element={<About />} />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;
