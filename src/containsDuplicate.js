/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  if (!Array.isArray(nums)) {
    throw new TypeError("Input must be an array");
  }
  const seen = new Set(nums);

  console.log(seen.size);

  if (nums.length !== seen.size) {
    return true;
  }
  return false;
}

module.exports = containsDuplicate;
