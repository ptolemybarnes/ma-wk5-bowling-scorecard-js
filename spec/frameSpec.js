describe('Frame', function() {
  var frame;

  beforeEach(function() { frame = new Frame() });

  describe('knows it', function() {

    it('is not over after 1 roll', function() {
      var score = 3;
      frame.knockDown(score);

      expect(frame.isFrameOver()).toBe(false);
    });

    it('is over after two rolls', function() {
      var score = 3;
      frame.knockDown(score);
      frame.knockDown(score);

      expect(frame.isFrameOver()).toBe(true);
    });

    it('is over if strike is scored', function() {
      frame.knockDown(10);

      expect(frame.isFrameOver()).toBe(true);
    });

  });

  describe('tells the player', function() {

    it('score of the roll', function() {
      var PlayerDouble = function(){}; 
      PlayerDouble.prototype.receiveScore = function(score){};
      var player = new PlayerDouble();
      spyOn(player, 'receiveScore');

      frame.sendScoreToPlayer(player);

      expect(player.receiveScore).toHaveBeenCalled();
    });

    it('to begin bonus streak of two if frame ends with strike', function() {
      var PlayerDouble = function(){}; 
      PlayerDouble.prototype.startBonusStreak = function(streakCount){};
      var player = new PlayerDouble();
      spyOn(player, 'startBonusStreak');

      frame.knockDown(10);
      frame.endFrame(player);

      expect(player.startBonusStreak).toHaveBeenCalledWith(2);
    });

    it('to begin bonus streak of one if frame ends with spare', function() {
      var PlayerDouble = function(){}; 
      PlayerDouble.prototype.startBonusStreak = function(streakCount){};
      var player = new PlayerDouble();
      spyOn(player, 'startBonusStreak');

      frame.knockDown(5);
      frame.knockDown(5);
      frame.endFrame(player);

      expect(player.startBonusStreak).toHaveBeenCalledWith(1);
    });
  });

  it('records the score of each knockDown', function() {
    frame.knockDown(5);
    frame.knockDown(3);

    expect(frame.scoreRecord).toEqual([5,3])
  });

  it('throws error if there is a knockDown when frame is over', function() {
    frame.knockDown(5);
    frame.knockDown(3);

    expect( function(){ frame.knockDown(2) }).toThrowError('The frame is over! No more rolls.')
  });
});