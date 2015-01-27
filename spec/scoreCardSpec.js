describe('Scorecard', function() {
  var scorecard;
  var player;

  beforeEach(function() {
    scorecard = new Scorecard(10);
  });

  describe('knows', function() {

    it('the game is over after the number of frames given', function() {
      for (var i = 0; i < 10; i++) {
        scorecard.receiveFrameScore([3,3]);
      }

      expect(scorecard.isGameOver()).toBe(true);
    })

    it('the cumulative score after each frame', function() {
      scorecard.receivePlayerScore(10);
      scorecard.receivePlayerScore(5);

      expect(scorecard.info.playerScoreRecord).toEqual([10, 5]);
    });
  });
});