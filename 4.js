/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const nums = nums1.concat(nums2).sort((a, b) => {return a-b})
  console.log(nums)
  const len = nums.length
  // console.log( len % 2 === 0 ? (nums[len/2] + nums[(len/2) -1]) / 2 : nums[(len-1)/2])
  return  len % 2 === 0 ? (nums[len/2] + nums[(len/2) -1]) / 2 : nums[(len-1)/2]
};

const nums1 = [1,3]
const nums2 = [2]

findMedianSortedArrays(nums1, nums2)