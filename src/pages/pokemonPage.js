import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState("");
  const pokemonName = useParams().name;

  const getPokemon = async () => {
    const result = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    // console.log(result.data);
    setPokemon(result.data);
  };

  useEffect(() => {
    getPokemon();
    // console.log(pokemon);
  }, []);

  return (
    <div>
      <h1>{pokemon.name.toUpperCase()}</h1>
      {console.log(pokemon)}
      <img src={pokemon.sprites.front_shiny} />
      <img src={pokemon.sprites.back_shiny} />
      <p>Base Experience: {pokemon.base_experience}</p>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
};

export default PokemonPage;
