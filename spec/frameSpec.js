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