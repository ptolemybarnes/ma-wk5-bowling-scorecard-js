function TenthFrame(rollCount) {
  Frame.call(this, rollCount);
};

TenthFrame.prototype             = Object.create(Frame.prototype);
TenthFrame.prototype.constructor = TenthFrame;

TenthFrame.prototype.knockDown = function(score) {
  this.scoreRecord.push(score);
  this.rollCount -= 1;
  this.pinsCount -= score;
};

TenthFrame.prototype.isFrameOver = function() {
  if ((isStrike(this.scoreRecord) || isSpare(this.scoreRecord)) && this.rollCount > 0) {
    return false;
  };
  return true;
};