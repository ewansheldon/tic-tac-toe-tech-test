describe('game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('has a game map by default', function() {
    expect(game._map).toEqual([" ", " ", " ", " ", " ", " ", " ", " ", " "])
  });

  it('can add a nought to the map', function() {
    game.addNought(0)
    expect(game._map).toEqual(["O", " ", " ", " ", " ", " ", " ", " ", " "])
  })
});
