import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemon = async () => {
    const result = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );
    const nextResult = result.data.next;
    const previousResult = result.data.previous;
    setPokemonList(result.data.results);
    console.log(result);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  //   const findPreviousPokemon = async () => {
  //     const result = await axios.get(previousResult);
  //     setPokemonList(result.data.results);
  //   };

  //   const findNextPokemon = async () => {
  //     const result = await axios.get(nextResult);
  //     setPokemonList(result.data.results);
  //   };

  return (
    <div>
      <h1 className="pokedexTitle">Pokédex</h1>
      <ul>
        {pokemonList.map((p) => {
          return <li key={p.url}>{p.name}</li>;
          console.log(p);
        })}
      </ul>
      {/* <button className="previousBtn" onClick={findPreviousPokemon}>
        Previous
      </button>
      <button className="nextBtn" onClick={findNextPokemon}>
        Next
      </button> */}
    </div>
  );
};

export default Pokedex;
