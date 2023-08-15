import Header from "./components/Header/Header.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";

function App() {
  return (
    
    <div className="App">
      <Header />
      <Cards characters={characters} />
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </div>
  );
}

export default App;
