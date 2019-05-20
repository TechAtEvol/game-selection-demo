import allGames from './all-games';

const games = () => {
  const getAll = () => {
    return allGames;
  }
  return {
    getAll
  }
};

export default games;