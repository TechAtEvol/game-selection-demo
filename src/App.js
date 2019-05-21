import React from 'react';
import GameGrid from './components/GameGrid';
import './App.css'
import branding from './config/branding'

function App() {
  return (
    <div className="App">
      <span>
      <h3 className="ui block header"><img className="logo" src={branding.logoURL} alt={branding.alt}/> My Games</h3></span>
      <GameGrid />
    </div>
  );
}

export default App;
