import { useState } from "react";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          // Verificar si el personaje ya existe en la lista
          const isCharacterAdded = characters.some(character => character.id === data.id);
  
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
  }

  const onRandomAdd = () => {
    const randomId = Math.floor((Math.random() * 826) + 1);
    onSearch(randomId);
  }

  const onClose = (id) => {
    setCharacters((prevCharacters) => {
      const updatedCharacters = prevCharacters.filter(character => character.id !== Number(id));
      return updatedCharacters;
    });
  };
  
  return (
    <div className="App">
      <Nav onSearch={onSearch} onRandomAdd={onRandomAdd}  />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
};

export default App;
