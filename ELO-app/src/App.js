import React from 'react';
import './App.css';
import ReactPlayer from 'react-player'
import EloContainer from './EloContainer/EloContainer';
import PostContainer from './PostContainer/PostContainer';



function App() {
  return (
    <div className="App">
      <EloContainer />
    <ReactPlayer url='twitch.tv/riotgames' />
    <PostContainer/>
    </div>
  );
}

export default App;
