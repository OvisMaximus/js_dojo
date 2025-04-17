function getRequired(player, enemy) {
  function sum(arrayOfInt) {
    return arrayOfInt[0] + arrayOfInt[1];
  }
  return sum(player) === sum(enemy) ? "Random"
    : sum(enemy) > sum(player) ? "Auto-lose"
    : "Auto-win";
}

module.exports = getRequired;
