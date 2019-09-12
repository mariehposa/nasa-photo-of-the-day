import React from 'react';
import nasa from './img/nasa.jpg';
import styled from 'styled-components';

const Navigation = styled.div`
    display: flex;
    justify-content: space-between;

    img{
        transition: ease-in-out;
        width: 10rem;
        height: 8rem;
        pointer-events: none;
        margin: .5rem 0;
    }

    div{
        display: flex;
        padding: 2rem 1rem;

        nav{
            margin: 0 2rem;
            color: black;
        }
    }
`

function Nav () {
  return (
    <Navigation>
      <img src={nasa} alt="nasa logo"/>
      <div>
          <nav>Home</nav>
          <nav>About</nav>
          <nav>Works</nav>
          <nav>Contact</nav>   
      </div>
    </Navigation>
  );
}

export default Nav;
