import React from 'react';
import renderer from 'react-test-renderer';
import GameTile from './GameTile'
import allGames from './../test-resources/all-games'

describe('GameTile', () => {
  const testGame = allGames[0];
  it('renders correctly', () => {
    const dom = renderer.create(
      <GameTile game={testGame}/>
    ).toJSON()
    expect(dom).toMatchSnapshot();
  })
});