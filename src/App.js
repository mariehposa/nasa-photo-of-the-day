import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Nav from "./Components/Navigation/nav";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/body";

const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=dUW2dEj9Yt0dy0rxtN5wrJ9bu8OWaLXuPwpVj6e1';

function App() {

  const [headerState, setHeaderState] = useState();

  useEffect(() =>{
    axios.get(nasaApi)
      .then((response) =>{
        //console.log(response.data);
        setHeaderState(response.data)
      })
      .catch((error) =>{
        //console.log(error.message);
      });
  }, []);

  return  headerState 
          ? (   //return this if headerState is not undefined
              <div className="App">
                <Nav/>
                <Header dataa={headerState}/>
                <Body dataa={headerState}/>
              </div>
            )
          : <div>  {/*else headerState run after getting the data from the api*/}
              <h3>Loading...</h3>
            </div>
}

export default App;
