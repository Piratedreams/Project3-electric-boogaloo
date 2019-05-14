import React from 'react';
import './App.css';
// import StreamContainer from './StreamContainer/StreamContainer';
import ReactPlayer from 'react-player'
import EloContainer from './EloContainer/EloContainer';
// import Twitch from 'react-twitch-embed-video'


function App() {
  return (
    <div className="App">
      <EloContainer />
    <ReactPlayer url='twitch.tv/riotgames' />
    
    </div>
  );
}

export default App;
