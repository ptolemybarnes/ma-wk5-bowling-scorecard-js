// player class is responsible for keeping track of its score and also whether it's in 'bonus mode'
// in bonus mode, the player's scores are multiplied.

var Player = function() {
  this.score       = 0;
  this.bonusStreak = 0; // tracks remaining rounds wherein player can score bonus points.
};

Player.prototype.receiveScore = function(points) {
  if (this.bonusStreak > 0) {
    var points = (points * 2);
    this.bonusStreak -= 1;
  };
  this.increaseScore(points);
};

Player.prototype.increaseScore = function(points) {
  this.score += points;
};

Player.prototype.startBonusStreak = function(streakCount) {
  this.bonusStreak = streakCount;
};