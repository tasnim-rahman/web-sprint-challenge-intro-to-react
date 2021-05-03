import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { response } from 'msw';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  const [characterInfo, setCharacterInfo] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(()=> {
    axios.get("https://swapi.dev/api/people")
    .then(response => {
      setCharacterInfo(response.data)
    })
    .catch(err => {
      setCharacterInfo(err)
    })
  },["https://swapi.dev/api/people"]) 

    const name = characterInfo.name
  
    console.log(characterInfo)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character name={name}/>
    </div>
  );
}

export default App;
