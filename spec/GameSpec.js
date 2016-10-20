describe('game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('has a game map by default', function() {
    expect(game._map).toEqual([[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]])
  });
});
