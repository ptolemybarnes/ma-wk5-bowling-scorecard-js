var KNOW_FRAME_OUTCOME = (function() {

  return {
    isStrike: function(scoreRecord) {
      if (scoreRecord[0] === 10) {
       return true }
      else {
        return false }
    },
    isSpare: function(scoreRecord) {
      if ((scoreRecord[0] + scoreRecord[1]) === 10) {
       return true }
      else {
        return false }
    }
  };

})();