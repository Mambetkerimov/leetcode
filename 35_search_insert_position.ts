// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
// Link to problem: https://leetcode.com/problems/search-insert-position/

function searchInsert(nums: number[], target: number): number | undefined {
    const middleValue = nums[Math.floor((nums.length - 1) / 2)];
    if(target == middleValue) {
        return nums.splice(0, nums.indexOf(middleValue)).length
    }
    for(let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if(target == value) {
            return nums.splice(0, nums.indexOf(value)).length
        }
        nums.push(target);
        const sortedArray = nums.sort((a, b) => {
            return a - b
        });
        sortedArray.splice(sortedArray.indexOf(target))
        return sortedArray.length
    }
};

searchInsert([1,3,5,6], 5);
searchInsert([1,3,5,6], 2);
searchInsert([1,3,5,6], 7);
