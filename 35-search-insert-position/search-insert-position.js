/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (target === nums[mid]) {
            return mid;
        }
        else if (target > nums[mid]) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return left;
};