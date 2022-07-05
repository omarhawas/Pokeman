import React from "react";
import Pokedex from "../components/Pokedex";

const Homepage = () => {
  return (
    <div>
      <Pokedex useLinks={true} />
    </div>
  );
};

export default Homepage;
