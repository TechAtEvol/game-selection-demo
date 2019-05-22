import createGamesFilter from './gamesFilter'
import testGameList from './../test-resources/all-games';

describe('gamesFilter', () => {
  const { filterOnGameProvider, filterOnGameCollectionID } = createGamesFilter();
  describe('when filtering on a given gameProvider', () => {
    it('returns a matching list for that gameProvider', () => {
      const firstGameProvider = testGameList[0].gameProvider
      const result = filterOnGameProvider(testGameList, firstGameProvider);
      expect(result.length > 0).toBe(true);
    });
    it('returns all if the gameProvider is All', () => {
      const gameProvider = "All";
      const result = filterOnGameProvider(testGameList, gameProvider);
      expect(result.length).toBe(testGameList.length);
    });
    it('returns none if the gameProvider is undefined', () => {
      const gameProvider = undefined;
      const result = filterOnGameProvider(testGameList, gameProvider);
      expect(result.length).toBe(0);
    })
  });
  describe('when filtering on a given gameCollectionId', () => {
    it('returns a matching list for that gameCollectionId', () => {
      const firstGameCollectionId = "table-games";
      const NO_OF_TABLE_GAMES = 29;
      const result = filterOnGameCollectionID(testGameList, firstGameCollectionId);
      expect(result.length).toBe(NO_OF_TABLE_GAMES);
    });
    it('returns all if the gameCollectionId is All', () => {
      const gameCollectionId = "All";
      const result = filterOnGameCollectionID(testGameList, gameCollectionId);
      expect(result.length).toBe(testGameList.length);
    })
    it('returns none if the gameCollectionId is undefined', () => {
      const gameCollectionId = undefined;
      const result = filterOnGameCollectionID(testGameList, gameCollectionId);
      expect(result.length).toBe(0);
    })
  });
});