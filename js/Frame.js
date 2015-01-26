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