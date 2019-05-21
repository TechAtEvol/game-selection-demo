import React from 'react';
import GameGrid from './components/GameGrid';
import createGameService from './services/gamesService'

function App() {
  // TODO: This could be nice to have in GameGrid instead probably
  const gamesService = createGameService();
  const games = gamesService.getAll();
  // TODO: gameProviders, gameCollectionIDs could be functions of the service and calculated from the gamelist
  const gameProviders = [
    {value:"All",label:"All"},
    {value:"OGS",label:"OGS"},
    {value:"IGT",label:"IGT"}
    ];
  const gameCollectionIDs = [
    {value:"All",label:"All"},
    {value:"slots",label:"slots"},
  ];

  // TODO: Support branding
  return (
    <div className="App">
      <h3 className="ui block header">My Games</h3>
      <GameGrid games={games} gameProviders={gameProviders} gameCollectionIDs={gameCollectionIDs} />
    </div>
  );
}

export default App;
