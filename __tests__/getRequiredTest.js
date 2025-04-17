const getRequired = require("../production/getRequired");

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
});
