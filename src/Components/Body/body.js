import React from 'react';

function Body (props) {
    const {explanation, date} = props.dataa;

    return (
      <div className="App-header">
        <p style={{"color":"gold"}}>Description: <span style={{"color":"white"}}>{explanation}</span></p>
        <dt style={{"color":"gold"}}>Date: {date}</dt>
      </div>
    );
}
  
export default Body;