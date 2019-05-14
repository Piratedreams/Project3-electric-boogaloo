import React from 'react';
import './App.css';
// import StreamContainer from './StreamContainer/StreamContainer';
import ReactPlayer from 'react-player'
import EloContainer from './EloContainer/EloContainer';
// import Twitch from 'react-twitch-embed-video'


function App() {
  return (
    <div className="App">
    <ReactPlayer url='twitch.tv/riotgames' />
    <EloContainer/>
    </div>
  );
}

export default App;
