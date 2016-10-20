function Game() {
  this._map = [" ", " ", " ",
              " ", " ", " ",
              " ", " ", " "];
}

Game.prototype = {
  addNought: function(coordinate) {
    this._map[coordinate] = "O"
  }

};
