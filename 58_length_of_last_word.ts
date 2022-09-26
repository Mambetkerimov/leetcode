//Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Link to problem: https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
    const newString = s.trim().replace(/[\[\]?.,\/#!$%\^&\*;:{}=\\|_~()]/g, "").split(" ");
    return newString[newString.length - 1].length
};

lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");