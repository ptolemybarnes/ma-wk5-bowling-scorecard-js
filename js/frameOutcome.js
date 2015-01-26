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
  if (KNOW_FRAME_OUTCOME.isStrike(this.scoreRecord)) { 
    player.startBonusStreak(2);
  }
  else if (KNOW_FRAME_OUTCOME.isSpare(this.scoreRecord)) {
    player.startBonusStreak(1);
  }
};
