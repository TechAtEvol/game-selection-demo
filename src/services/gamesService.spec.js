import createGamesService from "./gamesService";

describe('gamesService', () => {
  const gamesService = createGamesService();
  describe('when calling getAll', () => {
    it('it returns a list of games', () => {
      const allGames = gamesService.getAllGames()
      expect(allGames.length > 0).toBe(true)
    })
  })
});