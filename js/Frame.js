// Frame class is responsible for starting and ending a frame, sending the number
// of pins knocked down to the player object and engaging the player's bonusStreak mode if
// she scores a strike.

var Frame = function(rollCount) {
  this.rollCount   = rollCount || 2;
  this.scoreRecord = [];
  this.pinsCount   = 10;
};

Frame.prototype.knockDown = function(score) {
  if (this.isFrameOver() ) { throw Error('The frame is over! No more rolls.') };
  this.scoreRecord.push(score);
  this.rollCount -= 1;
  this.pinsCount -= score;
};

Frame.prototype.isFrameOver = function() {
  if (this.rollCount > 0 && this.pinsCount > 0) {
    return false }
  else {
    return true }
};

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
  if ((this.isStrike() || this.isSpare()) && this.rollCount > 0) {
    return false;
  };
  return true;
};

TenthFrame.prototype.isStrike = function() {
  if (this.scoreRecord[0] === 10) {
   return true }
  else {
    return false }
};

TenthFrame.prototype.isSpare = function() {
  if ((this.scoreRecord[0] + this.scoreRecord[1]) === 10) {
   return true }
  else {
    return false }
};