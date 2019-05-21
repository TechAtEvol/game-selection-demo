import React from 'react';
import { Component } from 'react';
import GameTile from './GameTile';
import createGamesFilter from './gamesFilter'
import Select from 'react-select'
import './GameGrid.css'

const { filterOnGameProvider, filterOnGameCollectionID } = createGamesFilter();

class GameGrid extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      ...props,
      selectedProvider: 'All',
      selectedCollection: 'All',
      currentGames : []
    };
  }

  componentDidMount() {
    this.setState({currentGames: this.state.games})
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

  // TODO: Better CSS for mobile view, use the full width for the select-boxes

  render() {
    return (
      <div className="ui doubling stackable grid container">
        <div className="ui four column row">
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
};
export default GameGrid