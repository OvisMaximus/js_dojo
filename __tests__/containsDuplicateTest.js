const containsDuplicate = require("../src/containsDuplicate");

describe("containsDuplicate", () => {
  test("should return true when there are duplicates", () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test("should return false when there are no duplicates", () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toBe(false);
  });

  test("should return false for an empty array", () => {
    const nums = [];
    expect(containsDuplicate(nums)).toBe(false);
  });

  test("should return false for an array with a single element", () => {
    const nums = [1];
    expect(containsDuplicate(nums)).toBe(false);
  });

  test("should handle negative numbers and return true if duplicates exist", () => {
    const nums = [-1, -2, -3, -1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test("should work for large inputs with no duplication", () => {
    const nums = Array.from({ length: 1000 }, (_, i) => i);
    expect(containsDuplicate(nums)).toBe(false);
  });

  test("should work for large inputs with duplication", () => {
    const nums = Array.from({ length: 999 }, (_, i) => i).concat(1);
    expect(containsDuplicate(nums)).toBe(true);
  });
});
