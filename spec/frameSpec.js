describe('Frame', function() {
  var frame;

  beforeEach(function() { frame = new Frame() });

  it('knows frame is not over after 1 roll', function() {
    var score = 3;
    frame.roll(score);

    expect(frame.isFrameOver()).toBe(false);
  });

  it('knows frame is over after two rolls', function() {
    var score = 3;
    frame.roll(score);
    frame.roll(score);

    expect(frame.isFrameOver()).toBe(true);
  });

  it('knows frame is over if strike is scored', function() {
    frame.roll(10);

    expect(frame.isFrameOver()).toBe(true);
  });

  it('sends the score to player', function() {
    var PlayerDouble = function(){}; 
    PlayerDouble.prototype.receiveScore = function(score){};
    var player = new PlayerDouble();
    spyOn(player, 'receiveScore');

    frame.sendScoreToPlayer(player);

    expect(player.receiveScore).toHaveBeenCalled();
  });

  it('records the score of each roll', function() {
    frame.roll(5);
    frame.roll(3);

    expect(frame.scoreRecord).toEqual([5,3])
  });
});