var isSpare = function(scoreRecord) {
      if ((scoreRecord[0] + scoreRecord[1]) === 10) {
       return true }
      else {
        return false }
    }

var isStrike = function(scoreRecord) {
      if (scoreRecord[0] === 10) {
       return true }
      else {
        return false }
    }