import React, {useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Nav from "./Components/Navigation/nav";
import Header from "./Components/Header/Header"

const nasaApi = 'https://lambda-github-api-server.herokuapp.com/';

function App() {
  useEffect(() =>{
    axios.get(nasaApi)
    .then((response) =>{
      console.log(response.data);
    })
    .catch((error) =>{
      console.log(error.message);
    })
  }, []);

  return (
    <div className="App">
      <Nav />
      <Header/>
    </div>
  );
}

export default App;
