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
  if ((KNOW_FRAME_OUTCOME.isStrike(this.scoreRecord) || KNOW_FRAME_OUTCOME.isSpare(this.scoreRecord)) && this.rollCount > 0) {
    return false;
  };
  return true;
};

TenthFrame.prototype.isStrike = function(scoreRecord) {
  if (scoreRecord[0] === 10) {
   return true }
  else {
    return false }
};

TenthFrame.prototype.isSpare = function(scoreRecord) {
  if ((scoreRecord[0] + scoreRecord[1]) === 10) {
   return true }
  else {
    return false }
};