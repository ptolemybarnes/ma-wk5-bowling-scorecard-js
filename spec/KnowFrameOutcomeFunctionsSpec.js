describe('Frame outcome functions', function() {

  describe('know when frame was a spare', function() {
    
    it('with two rolls adding up to 10.', function() {
      expect(isSpare([9,1])).toBe(true);
    });
  });

  describe('know when frame wasnt a spare', function(){

    it('with two rolls that dont add up to 10.', function() {
      expect(isSpare([5,3])).toBe(false);
    });

    it('when it was a strike', function(){
      expect(isSpare([10])).toBe(false);
    });
  });

  describe('know when frame was a strike', function() {

    it('when first roll was 10.', function() {
      expect(isStrike([10])).toBe(true);
    });
  });

  describe('know frame wasnt a strike', function() {
    
    it('when first roll scored 0 and second scored 10', function(){
      expect(isStrike([0,10])).toBe(false);
    });
  });
});