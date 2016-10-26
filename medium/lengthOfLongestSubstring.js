/*
 Given a string, find the length of the longest substring without repeating characters.

 Examples:

 Given "abcabcbb", the answer is "abc", which the length is 3.

 Given "bbbbb", the answer is "b", with the length of 1.

 Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0
  var str = s[0]
  var max = 0
  var flag = -1
  for(var i = 1; i< s.length; i++) {
    flag = str.indexOf(s[i])
    if(flag != -1) {
      // 搜索到相同字符则做一次结算。 并截断字符串继续搜寻
      max = Math.max(str.length, max)
      str = str.slice(flag + 1) + s[i]
    } else {
      str += s[i]
    }
  }

  max = Math.max(str.length, max)

  return max
}

