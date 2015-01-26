describe('Scorecard', function() {
  var scorecard;
  var player;

  beforeEach(function() {
    player    = {};
    scorecard = new Scorecard(player);
  });

  describe('knows', function() {

    it('the game is over after 10 frames', function() {
      for (var i = 0; i < 10; i++) {
        scorecard.receiveFrameScore([3,3]);
      }

      expect(scorecard.isGameOver()).toBe(true);
    })
  });
});