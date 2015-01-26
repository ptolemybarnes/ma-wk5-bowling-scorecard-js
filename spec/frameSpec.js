describe('Frame', function() {
  var frame;

  beforeEach(function() { 
    frame = new Frame();
   });

  describe('knows score', function() {

    it('after two knockdowns', function() {
      frame.knockDown(3);
      frame.knockDown(2);

      expect(frame.scoreRecord).toEqual([3,2]);
    });
  });

  it('throws error if there is a knockDown when frame is over', function() {
    frame.knockDown(5);
    frame.knockDown(3);

    expect( function(){ frame.knockDown(2) }).toThrowError('The frame is over! No more rolls.')
  });
});

describe('TenthFrame', function() {
  var tenthFrame;

  it('knows frame is not over after a strike', function() {
    tenthFrame = new TenthFrame(3);

    tenthFrame.knockDown(10);

    expect(tenthFrame.isFrameOver()).toBe(false);
  });

  it('knows frame is not over after a spare', function() {
    tenthFrame = new TenthFrame(3);

    tenthFrame.knockDown(5);
    tenthFrame.knockDown(5);

    expect(tenthFrame.isFrameOver()).toBe(false);
  });

  it('knows frame is over if not a strike or a spare', function() {
    tenthFrame = new TenthFrame(3);

    tenthFrame.knockDown(5);
    tenthFrame.knockDown(3);

    expect(tenthFrame.isFrameOver()).toBe(true);
  });

  it('knows frame is over after three rolls', function() {
    tenthFrame = new TenthFrame(3);

    tenthFrame.knockDown(10);
    tenthFrame.knockDown(10);
    tenthFrame.knockDown(10);

    expect(tenthFrame.isFrameOver()).toBe(true);
  });
});