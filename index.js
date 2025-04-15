/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (num === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

module.exports = containsDuplicate;