//Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Link to problem: https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
    if (!strs.length) return '';

    for (let i = 0; i <= strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
};

longestCommonPrefix(["flower","flow","flight"]);
longestCommonPrefix(["dog","racecar","car"]);