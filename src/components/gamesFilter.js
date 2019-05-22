const gamesFilter = () => {

  const filterOnGameProvider = (games, gameProvider) => {
    return games.filter( game => {
      if(! game.gameProvider && gameProvider !== 'All') return false;
      if(gameProvider === 'All') return true;
      return game.gameProvider === gameProvider
    })
  };

  const filterOnGameCollectionID = (games, gameCollectionId) => {
    const matchingGames = games.filter( game => {
      if(! game.gameCollectionIds && gameCollectionId !== 'All') return false;
      if(gameCollectionId === 'All') return true;
      const matches = game.gameCollectionIds.filter( id => {
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