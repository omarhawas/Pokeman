import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemon = async () => {
    const result = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    setPokemonList(result);
    console.log(result.data.results);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h1>List of Pokémons</h1>
      {/* <ul>
        {pokemonList.map((p) => {
          return <li>{p.name}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default Pokedex;
