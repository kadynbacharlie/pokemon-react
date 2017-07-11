import React from 'react';
import {Link} from 'react-router-dom';
import details from '../details.json';
import './Details.css';

const Details = (props) => {
  const pokemon = details[props.match.params.id];
  if (pokemon) {
    return (
      <div className="Details">
        <label id="bread-crumb">
          <Link to="/">Home</Link> / {pokemon.title}
        </label>
        <div className="content-row">
          <div>
            <h1 id="pokemon-title">{pokemon.title}</h1>
            <img src={pokemon.img} alt={pokemon.title} height="250"/>
            <h2>Evolves: {pokemon.evolution}</h2>
            <h2>Element: {pokemon.element}</h2>
            <h2>Ability: {pokemon.ability}</h2>
            <h2>Height: {pokemon.height}</h2>
            <h2>Weight: {pokemon.weight}</h2>
          </div>
          <iframe width="560" height="315" src={pokemon.videoURL} frameBorder="0" allowFullScreen />
        </div>
      </div>
    );
  } else {
    return (
      <div className="Details">
        <label>
          <Link to="/">Home</Link> / Unknown ID
        </label>
        <h1>No pokemon with id {props.match.params.id}</h1>
      </div>
    );
  }
};

export default Details;