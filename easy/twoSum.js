/*
 Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution.

 Example:
 Given nums = [2, 7, 11, 15], target = 9,

 Because nums[0] + nums[1] = 2 + 7 = 9,
 return [0, 1].

 https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var searchMap = []
  var searchTarget = 0
  for(var i = 0; i< nums.length; i++ ){
    searchTarget = target - nums[i]
    searchMap = nums.slice(i + 1)
    var flag = searchMap.indexOf(searchTarget)
    if(flag != -1) {
      return [i, i+flag+1]
    }
  }
  return [0, 0]
};


