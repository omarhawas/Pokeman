import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import Pokedex from "../components/Pokedex";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState("");
  const pokemonName = useParams().name;
  const [value, setValue] = useState("");

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

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {console.log(pokemon)}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pokemon.sprites?.front_shiny} />
        <Card.Img variant="top" src={pokemon.sprites?.back_shiny} />
        <Card.Body>
          <Card.Title>{pokemon.name?.toUpperCase()}</Card.Title>
          <Card.Text>Base Experience: {pokemon.base_experience}</Card.Text>
          <Card.Text>Height: {pokemon.height}</Card.Text>
          <Card.Text>Weight: {pokemon.weight}</Card.Text>
        </Card.Body>
      </Card>
      <input
        type="text"
        value={value}
        placeholder="Search for Pokémon"
        onChange={handleInputChange}
      ></input>
      <button>Compare</button>
      <Pokedex />
    </div>
  );
};

export default PokemonPage;
