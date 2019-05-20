const gamesFilter = () => {

  const filterOnGameProvider = (games, gameProvider) => {
    return games.filter( game => {
      if(! game.gameProvider) return false;
      if(gameProvider === 'All') return true;
      return game.gameProvider === gameProvider
    })
  };

  const filterOnGameCollectionID = (games, gameCollectionId) => {
    const matchingGames = games.filter( game => {
      if(! game.gameCollectionIds) return false;
      const matches = game.gameCollectionIds.filter( id => {
        if(gameCollectionId === 'All') return true;
        return id === gameCollectionId
      });
      return matches.length > 0
    });
    return matchingGames;
  };

  return {
    filterOnGameProvider,
    filterOnGameCollectionID
  }
};
export default gamesFilter