import "./App.css";
import Homepage from "./pages/Homepage";
import PokemonPage from "./pages/PokemonPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Pokéman</Navbar.Brand>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/pokemon/:name" element={<PokemonPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
