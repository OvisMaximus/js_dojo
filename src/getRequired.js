function getRequired(player, enemy) {
  function sum(arrayOfInt) {
    return arrayOfInt[0] + arrayOfInt[1];
  }
  let playerAdvantage = sum(player) - sum(enemy);

  function copeWithPlayerAdvantage() {
    if (playerAdvantage >= 6) {
      return "Auto-win";
    } else {
      return `(${7 - playerAdvantage}..6)`;
    }
  }

  function copeWithEnemyAdvantage() {
    if (playerAdvantage === -5) {
      return "Pray for a tie!"
    } else if (playerAdvantage <= -6) {
      return "Auto-lose";
    } else {
      return `(1..${playerAdvantage + 5})`;
    }
  }

  if (playerAdvantage === 0) {
    return "Random";
  } else if (playerAdvantage < 0) {
    return copeWithEnemyAdvantage();
  } else
    return copeWithPlayerAdvantage();

}

module.exports = getRequired;
