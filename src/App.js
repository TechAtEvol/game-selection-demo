import React from 'react';
import GameGrid from './components/GameGrid';

function App() {
  // TODO: Support branding
  return (
    <div className="App">
      <h3 className="ui block header">My Games</h3>
      <GameGrid />
    </div>
  );
}

export default App;
