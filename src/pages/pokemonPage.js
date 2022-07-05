import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, ListGroup } from "react-bootstrap";

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
      {console.log(pokemon)}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card> */}
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
    </div>
  );
};

export default PokemonPage;
