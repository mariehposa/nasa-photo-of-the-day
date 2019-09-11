import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Nav from "./Components/Navigation/nav";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/body";

const nasaApi = 'https://lambda-github-api-server.herokuapp.com/';

function App() {

  const [headerState, setHeaderState] = useState()
  useEffect(() =>{
    axios.get(nasaApi)
    .then((response) =>{
      console.log(response.data);
      setHeaderState(response.data)
    })
    .catch((error) =>{
      console.log(error.message);
    })
  }, []);

  return headerState //if the headerState is undefined, then...
  ?
    (
      <div className="App">
        <Nav/>
        <Header props= {headerState}/>
        <Body props= {headerState}/>
      </div>
    )
  : <div>  {/*else headerState run after getting the data from the api*/}
      <h3>Loading...</h3>
    </div>
}

export default App;
