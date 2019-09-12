import React from 'react';
import styled from 'styled-components';

// const 

function Header (props) {
    const {title, url, copyright} = props.props
    return (
      <div>
        <img src={url} alt="Header image"/>
        <div>
            <h3>Title => {title} </h3>
            <p style={{"font-style":"italic"}}>Copyright: {copyright} </p>
        </div>
      </div>
    );
  }
  
export default Header;