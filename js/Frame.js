// Frame class is responsible for starting and ending a frame, sending the number
// of pins knocked down to the player object and engaging the player's bonusStreak mode if
// she scores a strike.

var Frame = function() {
  this.rollCount = 2;
};

Frame.prototype.roll = function() {
  this.rollCount -= 1;
};

Frame.prototype.isFrameOver = function() {
  if (this.rollCount > 0) {
    return false }
  else {
    return true }
};

Frame.prototype.sendScoreToPlayer = function(player) {
  player.receiveScore();
};