import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pokedex = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPokemon, setNextPokemon] = useState("");
  const [previousPokemon, setPreviousPokemon] = useState("");

  const getPokemon = async () => {
    const result = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );
    setPokemonList(result.data.results);
    setNextPokemon(result.data.next);
    setPreviousPokemon(result.data.previous);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const findPreviousPokemon = async () => {
    const result = await axios.get(previousPokemon);
    setPokemonList(result.data.results);
    setPreviousPokemon(result.data.previous);
    setNextPokemon(result.data.next);
  };

  const findNextPokemon = async () => {
    const result = await axios.get(nextPokemon);
    setPokemonList(result.data.results);
    setPreviousPokemon(result.data.previous);
    setNextPokemon(result.data.next);
  };

  return (
    <div>
      <h1 className="pokedexTitle">Pokédex</h1>
      <ul>
        {pokemonList.map((p) => {
          //   console.log(p);
          return (
            <div key={p.url}>
              {props.useLinks ? (
                <Link to={`pokemon/${p.name}`}>{p.name}</Link>
              ) : (
                <p onClick={() => props.handleClick(p.name)}>{p.name}</p>
              )}
            </div>
          );
        })}
      </ul>
      <button className="previousBtn" onClick={findPreviousPokemon}>
        Previous
      </button>
      <button className="nextBtn" onClick={findNextPokemon}>
        Next
      </button>
    </div>
  );
};

export default Pokedex;
