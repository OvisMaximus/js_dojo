function getRequired(player, enemy) {
  function sum(arrayOfInt) {
    return arrayOfInt[0] + arrayOfInt[1];
  }
  let playerAdvantage = sum(player) - sum(enemy);
  return playerAdvantage === 0 ? "Random"
    : playerAdvantage < 0 ? "Auto-lose"
    : (playerAdvantage < 6 ? `(${7 - playerAdvantage}..6)`:"Auto-win");

}

module.exports = getRequired;
