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
  if (isStrike(this.scoreRecord)) { 
    player.startBonusStreak(2);
  }
  else if (isSpare(this.scoreRecord)) {
    player.startBonusStreak(1);
  }
};
