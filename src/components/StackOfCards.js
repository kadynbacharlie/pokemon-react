import React from 'react';
import Card from './Card';

const StackOfCards = function (props) {
  return (
    <div className="stack-of-cards">
      {
        props.cards.map(function (card, i) {
          return (
            <Card key={i} card={card}/>
          );
        })
      }
    </div>
  );
};

export default StackOfCards;