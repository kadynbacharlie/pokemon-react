import React from 'react';

import {stacks} from '../stacks.json';
import StackOfCards from './StackOfCards';

const Home = () => (
  <div className="container">
    {
      stacks.map(function (stack, index) {
        return (
          <StackOfCards key={index} cards={stack} />
        )
      })
    }
  </div>
);

export default Home;