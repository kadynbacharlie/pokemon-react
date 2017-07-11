import React from 'react';
import {Link} from 'react-router-dom';

const Card = function (props) {
  return (
    <div className={'card-link card-' + props.card.number}>
      <Link to={props.card.statePath}>
        <div className="card">
          <h1>{props.card.title}</h1>
          <img src={props.card.img} alt={props.card.title} height="250"/>
        </div>
      </Link>
    </div>
  );
};

export default Card;