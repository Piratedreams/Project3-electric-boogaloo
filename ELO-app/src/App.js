import React from 'react';
import './App.css';
import ReactPlayer from 'react-player'
import EloContainer from './EloContainer/EloContainer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <EloContainer />
    <ReactPlayer url='twitch.tv/riotgames' />
    
    </div>
  );
}

export default App;
