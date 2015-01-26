var Scorecard = function(gameLength) {
  this.frameScoreRecord = [];
  this.gameLength       = gameLength || 10;
};

Scorecard.prototype.receiveFrameScore = function(score) {
  this.frameScoreRecord.push(score);
};

Scorecard.prototype.isGameOver = function() {
  console.log(this.frameScoreRecord);
  if (this.frameScoreRecord.length == this.gameLength) { return true };
  return false;
};