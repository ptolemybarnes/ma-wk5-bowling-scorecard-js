var Scorecard = function(gameLength) {
  this.frameScoreRecord = [];
};

Scorecard.prototype.receiveFrameScore = function(score) {
  this.frameScoreRecord.push(score);
};

Scorecard.prototype.isGameOver = function() {
  console.log(this.frameScoreRecord);
  if (this.frameScoreRecord.length == 10) { return true };
  return false;
};