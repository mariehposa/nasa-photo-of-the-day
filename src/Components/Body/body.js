import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: .3rem;
  line-height: 1.5rem;
  margin: 0 .6rem;
  padding: 2rem 10rem;

  p{
    color: gold;

    span{
      color: white;
    }
  }

  dt{
    color: gold;
  }
`

function Body (props) {
    const {explanation, date} = props.props
    return (
      <Header>
        <p>Description: <span>{explanation}</span></p>
        <dt>Date: {date}</dt>
      </Header>
    );
}
  
export default Body;