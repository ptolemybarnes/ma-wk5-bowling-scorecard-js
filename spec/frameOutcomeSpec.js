describe ('FrameOutcome', function() {

  describe('tells the player', function() {

    var frameOutcome, PlayerDouble, player;

    beforeEach(function() {
      PlayerDouble = function(){}; 
      PlayerDouble.prototype.receiveScore     = function(score){};
      PlayerDouble.prototype.startBonusStreak = function(bonusCount){};
      player = new PlayerDouble();
    });

    it('score of each roll of the frame', function() {
      frameOutcome = new FrameOutcome([3,5])
      spyOn(player, 'receiveScore');

      frameOutcome.sendScoreToPlayer(player);

      expect(player.receiveScore).toHaveBeenCalledWith(3);
      expect(player.receiveScore).toHaveBeenCalledWith(5);
    });

    it('to begin bonus streak of two if frame ends with strike', function() {
      frameOutcome = new FrameOutcome([10])
      spyOn(player, 'startBonusStreak');

      frameOutcome.sendScoreToPlayer(player);

      expect(player.startBonusStreak).toHaveBeenCalledWith(2);
    });

    it('to begin bonus streak of one if frame ends with spare', function() {
       frameOutcome = new FrameOutcome([5, 5])

      spyOn(player, 'startBonusStreak');
      frameOutcome.sendScoreToPlayer(player);

      expect(player.startBonusStreak).toHaveBeenCalledWith(1);
    });
  });
});