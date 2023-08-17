import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";

const App = () => {
  return (
    <div className="App">      
      <Cards characters={characters} />
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </div>
  );
};

export default App;
