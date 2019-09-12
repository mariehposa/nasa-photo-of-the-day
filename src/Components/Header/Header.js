import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    height: 35rem;
    width: 80rem;
    border-radius: 2rem;
`
const All = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    p{
        font-style: italic;
    }
`

function Header ({props}) {
    const {title, url, copyright} = props;
    return (
      <div>
        <Image src={url} alt="Header image"/>
        <All>
            <h3>Title => {title} </h3>
            <p>Copyright: {copyright} </p>
        </All>
      </div>
    );
  }
  
export default Header;