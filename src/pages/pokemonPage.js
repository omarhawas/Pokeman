import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Col, Row } from "react-bootstrap";
import Pokedex from "../components/Pokedex";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState([]);
  const pokemonName = useParams().name;
  const [value, setValue] = useState("");

  const getPokemon = async (name = pokemonName) => {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemon([...pokemon, result.data]);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleNameClick = (name) => {
    const found = pokemon.find((e) => {
      return e.name === name;
    });
    if (found === undefined) {
      console.log(name);
      getPokemon(name);
    }
  };

  return (
    <>
      <Row xs={1} md={5} className="g-4">
        {pokemon.map((p) => (
          <Col key={p.name}>
            <Card className="pokeCard">
              <Card.Img
                className="pokeImage"
                variant="top"
                src={p.sprites?.front_shiny}
              />
              <Card.Img
                className="pokeImage"
                variant="top"
                src={p.sprites?.back_shiny}
              />
              <Card.Body>
                <Card.Title>{p.name?.toUpperCase()}</Card.Title>
                <Card.Text>Base Experience: {p.base_experience}</Card.Text>
                <Card.Text>Height: {p.height}</Card.Text>
                <Card.Text>Weight: {p.weight}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* <input
        type="text"
        value={value}
        placeholder="Search for Pokémon"
        onChange={handleInputChange}
      ></input>
      <button>Compare</button> */}
      <Pokedex useLinks={false} handleClick={handleNameClick} />
    </>
  );
};

export default PokemonPage;
