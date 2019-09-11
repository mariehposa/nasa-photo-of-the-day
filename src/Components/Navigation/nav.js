import React from 'react';
import nasa from './img/nasa.jpg';

function Nav () {
  return (
    <div className="navigation">
      <img className="App-logo" src={nasa} alt="nasa logo"/>
      <div className="navs">
          <nav className="App-link">Home</nav>
          <nav className="App-link">About</nav>
          <nav className="App-link">Works</nav>
          <nav className="App-link">Contact</nav>   
      </div>
    </div>
  );
}

export default Nav;
