var Scorecard = function(gameLength) {
  this.info = {
     'frameScoreRecord':[],
    'playerScoreRecord': []
  }
  this.gameLength       = gameLength || 10;
};

Scorecard.prototype.receiveFrameScore = function(score) {
  this.info.frameScoreRecord.push(score);
};

Scorecard.prototype.receivePlayerScore= function(score) {
  this.info.playerScoreRecord.push(score);
};

Scorecard.prototype.isGameOver = function() {
  console.log(this.info.frameScoreRecord);
  if (this.info.frameScoreRecord.length == this.gameLength) { return true };
  return false;
};