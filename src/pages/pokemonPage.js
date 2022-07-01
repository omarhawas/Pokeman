import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState("");
  const pokemonName = useParams().name;

  const getPokemon = async () => {
    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    console.log(result.data);
    setPokemon(result.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div>
      <h2>Hello World</h2>
      {/* <p>{pokemon.abilities}</p> */}
    </div>
  );
};

export default PokemonPage;
