// HOOKS
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
// COMPONENTES
import Nav from "./components/Nav/Nav.jsx";
// VIEWS
import Home from "./views/Home.view.jsx";
import About from "./views/About.view.jsx";
// import Detail from "./views/Detail.view.jsx";
import RoundDetail from "./views/RoundDetail.view.jsx";
import Error from "./views/Error.view.jsx";
//HELPERS
import PATHROUTES from "./helpers/PathRoutes.js";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    if (!/^\d+$/.test(id)) {
      window.alert("¡El ID debe ser un número válido!");
      return;
    }
  
    const numericId = parseInt(id, 10);
  
    if (numericId < 1 || numericId > 826) {
      window.alert("¡El ID debe estar entre 1 y 826!");
      return;
    }
  
    axios(`https://rickandmortyapi.com/api/character/${numericId}`)
      .then(({ data }) => {
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
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert("¡No hay personajes con este ID!");
        } else {
          console.error("Error en la solicitud:", error);
        }
      });
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
        {/* <Route path={PATHROUTES.DETAIL} element={<Detail />} /> */}
        <Route path={PATHROUTES.DETAIL} element={<RoundDetail />} />
        <Route path={PATHROUTES.ERROR} element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
