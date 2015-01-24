describe('Frame', function() {
  var frame;

  beforeEach(function() { frame = new Frame() });

  it('knows frame is not over after 1 roll', function() {
    frame.roll();

    expect(frame.isFrameOver()).toBe(false);
  });

  it('knows frame is over after two rolls', function() {
    frame.roll();
    frame.roll();

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
});