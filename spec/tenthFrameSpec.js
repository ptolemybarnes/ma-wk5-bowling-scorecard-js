describe('TenthFrame', function() {
  var tenthFrame;

  describe('knows it', function() {

    it('is not over after a strike', function() {
      tenthFrame = new TenthFrame(3);

      tenthFrame.knockDown(10);

      expect(tenthFrame.isFrameOver()).toBe(false);
    });

    it('is not over after a spare', function() {
      tenthFrame = new TenthFrame(3);

      tenthFrame.knockDown(5);
      tenthFrame.knockDown(5);

      expect(tenthFrame.isFrameOver()).toBe(false);
    });

    it('is over if not a strike or a spare', function() {
      tenthFrame = new TenthFrame(3);

      tenthFrame.knockDown(5);
      tenthFrame.knockDown(3);

      expect(tenthFrame.isFrameOver()).toBe(true);
    });

    it('is over after three rolls', function() {
      tenthFrame = new TenthFrame(3);

      tenthFrame.knockDown(10);
      tenthFrame.knockDown(10);
      tenthFrame.knockDown(10);

      expect(tenthFrame.isFrameOver()).toBe(true);
    });
  });
});