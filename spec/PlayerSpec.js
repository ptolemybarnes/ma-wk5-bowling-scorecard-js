// player class is responsible for keeping track of its score and also whether it's in 'bonus mode'
// in bonus mode, the player's scores are multiplied.

describe('Player', function() {
  var player;

  beforeEach(function() { player = new Player()});

  describe('starts', function() {

    it('with score of 0', function() {

      expect(player.score).toEqual(0);
    });
  });
});