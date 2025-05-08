const getRequired = require("../src/getRequired");

describe("getRequired", () => {
  test("should return 'Random' when the player and enemy sum up to the same integer", () => {
    const player = [3, 0];
    const enemy = [2, 1];
    expect(getRequired(player, enemy)).toBe("Random");
  });

  test("should return 'Auto-win' when the player has at least 6 more power (including modifiers) than the enemy", () => {
    const player = [9, 0];
    const enemy = [2, 1];
    expect(getRequired(player, enemy)).toBe("Auto-win");
  });

  test("should return 'Auto-lose' when the enemy has at least 6 more power (including modifiers) than the player", () => {
    const player = [2, 1];
    const enemy = [9, 0];
    expect(getRequired(player, enemy)).toBe("Auto-lose");
  });

  test("should return '(5..6)' when the enemy can not win anymore if the player rolls a 5 or 6", () => {
    const player = [6, 0];
    const enemy = [2, 2];
    expect(getRequired(player, enemy)).toBe("(5..6)");
  });

  test("should return '(1..3)' to tell the player he still can win if the enemy throws 1..3", () => {
    const player = [4, 0];
    const enemy = [6, 0];
    expect(getRequired(player, enemy)).toBe("(1..3)");
  });

  test("should return 'Pray for a tie!' to tell the player he still can win if he throws a 6 and the enemy throws a 1", () => {
    const player = [7, 2];
    const enemy = [6, 8];
    expect(getRequired(player, enemy)).toBe("Pray for a tie!");
  });
});
