describe('Player', function() {
  var player;

  beforeEach(function() { player = new Player()});

  describe('starts', function() {

    it('with score of 0', function() {

      expect(player.score).toEqual(0);
    });
  });

  describe('when not in bonus mode', function() {
    it('score can be increased', function() {
      player.receiveScore(5);

      expect(player.score).toEqual(5);
    });
  });

  describe('when in bonus mode', function() {

    it('score increases by double', function() {
      player.startBonusStreak();
      player.receiveScore(5);

      expect(player.score).toEqual(10);
    });

    it('score increases by double twice', function() {
      player.startBonusStreak();

      player.receiveScore(5);
      player.receiveScore(7);

      expect(player.score).toEqual(24);
    });
  });
});