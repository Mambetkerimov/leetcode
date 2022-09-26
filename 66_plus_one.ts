//You are given a large integer represented as an integer array digits, where each digits[i]
// is the ith digit of the integer.The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.
// Link to problem: https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]) {
    const number = Number(digits.join("")) + 1;
    const newArray = number.toString().split("").map(Number);
    console.log(newArray);
};