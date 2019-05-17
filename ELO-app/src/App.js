import React from 'react';
import './App.css';
import ReactPlayer from 'react-player'
import EloContainer from './EloContainer/EloContainer';
import PostContainer from './PostContainer/PostContainer';



function App() {
  return (
    <div className="App">
      <ReactPlayer url='twitch.tv/riotgames' />
      <EloContainer />
      <PostContainer/>
    </div>
  );
}

export default App;
