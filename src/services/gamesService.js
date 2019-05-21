import allGames from './all-games';


const gameProviders = [
  {value:"All",label:"All"},
  {value:"OGS",label:"OGS"},
  {value:"IGT",label:"IGT"}
];
const gameCollectionIDs = [
  {value:"All",label:"All"},
  {value:"slots",label:"slots"},
  {value:"table-games",label:"table-games"},
  {value:"top-rated-live",label:"top-rated-live"},
];

const games = () => {
  const getAllGames = () => {
    return allGames;
  };

  // TODO: gameProviders, gameCollectionIDs could be calculated from the gamelist

  const getGameProviders = () => {
    return gameProviders
  };

  const getGameCollectionIDs = () => {
    return gameCollectionIDs;
  };

  return {
    getAllGames,
    getGameProviders,
    getGameCollectionIDs
  }
};

export default games;