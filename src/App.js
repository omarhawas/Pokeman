import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Pokedex />
    </div>
  );
}

export default App;
