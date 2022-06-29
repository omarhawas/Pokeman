import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemon = async () => {
    const result = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    setPokemonList(result.data.results);
    console.log(result.data.results);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h1 className="pokedexTitle">Pokédex</h1>
      <ul>
        {pokemonList.map((p) => {
          return <li>{p.name}</li>;
          console.log(p);
        })}
      </ul>
    </div>
  );
};

export default Pokedex;
