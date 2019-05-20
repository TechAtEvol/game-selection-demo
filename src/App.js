import React from 'react';
import GameGrid from './components/GameGrid';
import createGameService from './services/gamesService'

function App() {
  const gamesService = createGameService();
  const games = gamesService.getAll();
  const gameProviders = [
    {value:"All",label:"All"},
    {value:"OGS",label:"OGS"},
    {value:"IGT",label:"IGT"}
    ];
  const gameCollectionIDs = [
    {value:"All",label:"All"},
    {value:"slots",label:"slots"},
  ];

  return (
    <div className="App">
      <h3 className="ui block header">My Games</h3>
      <GameGrid games={games} gameProviders={gameProviders} gameCollectionIDs={gameCollectionIDs} />
    </div>
  );
}

export default App;
