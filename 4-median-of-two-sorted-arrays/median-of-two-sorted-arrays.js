/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let sortedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const n = sortedArray.length;

    if (n % 2 !== 0) {
        const mid = Math.floor(n / 2);
        return sortedArray[mid];
    }

    return (sortedArray[n / 2] + sortedArray[(n / 2) - 1]) / 2;
};