import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GameTile = props => {
  const { game } = props;
  return (
    <div className="ui card">
      <div className = "image">
        <LazyLoadImage
          src = {game.thumbnailUrl}
          alt = {game.friendlyName}
        />
      </div>
      <div className="content">
        <div className="header">{game.name}</div>
        <div className="description">{game.description}</div>
      </div>
      <div className="extra content">
        <a href="http://mrgreen.se">
          <i className="play icon"></i>
          Spela här
        </a>
      </div>
    </div>
  )
};
export default GameTile