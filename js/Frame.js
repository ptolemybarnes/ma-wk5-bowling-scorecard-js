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

Frame.prototype.sendScoreToPlayer = function(player, score) {
  player.receiveScore();
};

Frame.prototype.endFrame = function(player) {
  if (this.isStrike()) { 
    player.startBonusStreak(2);
  }
  else if (this.isSpare()) {
    player.startBonusStreak(1);
  }
};

Frame.prototype.isStrike = function() {
  if (this.scoreRecord[0] === 10) {
   return true }
  else {
    return false }
};

Frame.prototype.isSpare = function() {
  if ((this.scoreRecord[0] + this.scoreRecord[1]) === 10) {
   return true }
  else {
    return false }
};