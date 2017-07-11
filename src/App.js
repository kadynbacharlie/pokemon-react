import React, {Component} from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Home from './components/Home';
import Details from './components/Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Link to="/">
            <div className="header-image"/>
          </Link>
        </header>
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/details/:id" component={Details}/>
          </Switch>
        </div>
        <footer>
          <h3 style={{color: '#ababab', fontFamily: 'Caveat, cursive'}}>by Kadyn</h3>
        </footer>
      </div>
    );
  }
}
export default App;
