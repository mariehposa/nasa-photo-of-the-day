import React from 'react';

function Header (props) {
    const {title, url, copyright} = props.props
    return (
      <div>
        <img className="image" src={url} alt="Header image"/>
        <div className="App-title">
            <h3>Title => {title} </h3>
            <p style={{"font-style":"italic"}}>Copyright: {copyright} </p>
        </div>
      </div>
    );
  }
  
export default Header;