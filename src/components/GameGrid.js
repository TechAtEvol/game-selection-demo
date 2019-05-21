import React from 'react';
import { Component } from 'react';
import GameTile from './GameTile';
import createGamesFilter from './gamesFilter'
import Select from 'react-select'
import './GameGrid.css'
import createGameService from './../services/gamesService'

const { filterOnGameProvider, filterOnGameCollectionID } = createGamesFilter();
const { getAllGames, getGameProviders, getGameCollectionIDs } = createGameService();

class GameGrid extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      ...props,
      games: [],
      gameProviders: [],
      gameCollectionIDs: [],
      selectedProvider: 'All',
      selectedCollection: 'All',
      currentGames : []
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      games: getAllGames(),
      currentGames: getAllGames(),
      gameProviders: getGameProviders(),
      gameCollectionIDs: getGameCollectionIDs()
    })
  };

  updateCurrentGames() {
    const firstFiltering = filterOnGameProvider(this.state.games, this.state.selectedProvider);
    const secondFiltering = filterOnGameCollectionID(firstFiltering, this.state.selectedCollection);
    this.setState(() => ({
      currentGames: secondFiltering
    }));
  }

  updateSelectedProvider = (selected)=> {
    this.setState({selectedProvider:selected.value});
    this.updateCurrentGames()
  };

  updateSelectedCollection = (selected)=> {
    this.setState({selectedCollection:selected.value});
    this.updateCurrentGames()
  };

  render() {
    return (
      <div className="ui doubling stackable grid container">
        <div className="ui row">
          <div className="ui label">
            Provider:
            <Select className="ui dropdown game-provider"
              value={this.selectedProvider}
              onChange={this.updateSelectedProvider}
              options={this.state.gameProviders}
            />
          </div>
          <div className="ui label">
            Collection:
            <Select className="ui dropdown game-collection"
                    value={this.selectedCollection}
                    onChange={this.updateSelectedCollection}
                    options={this.state.gameCollectionIDs}
            />
          </div>
        </div>
        {this.state.currentGames.map((game, i) => {
          return <GameTile key={i} game={game}/>
        })}
      </div>
    )
  }
}
export default GameGrid