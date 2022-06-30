import "./App.css";
import Homepage from "./pages/Homepage";
import Pokedex from "./components/Pokedex";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pokemonPage from "./pages/pokemonPage";

function App() {
  return (
    <div className="App">
      <Homepage />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pokemon/:name" element={<pokemonPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
