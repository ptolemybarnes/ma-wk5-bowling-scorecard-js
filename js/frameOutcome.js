var FrameOutcome = function(score) {
  this.scoreRecord = score;
};

FrameOutcome.prototype.sendScoreToPlayer = function(player) {
  this.scoreRecord.forEach(function(score) {
    player.receiveScore(score);
  });
  this.bonusOutcome(player);
};

FrameOutcome.prototype.bonusOutcome = function(player) {
  if (this.isStrike()) { 
    player.startBonusStreak(2);
  }
  else if (this.isSpare()) {
    player.startBonusStreak(1);
  }
};

FrameOutcome.prototype.isStrike = function() {
  if (this.scoreRecord[0] === 10) {
   return true }
  else {
    return false }
};

FrameOutcome.prototype.isSpare = function() {
  if ((this.scoreRecord[0] + this.scoreRecord[1]) === 10) {
   return true }
  else {
    return false }
};