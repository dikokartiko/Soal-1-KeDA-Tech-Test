const { isPalindrome } = require("../index");

describe("isPalindrome function", () => {
  test("should return true if the input string is a palindrome", () => {
    const str = "racecar";
    const result = isPalindrome(str);
    expect(result).toBe(true);
  });

  test("should return false if the input string is not a palindrome", () => {
    const str = "hello world";
    const result = isPalindrome(str);
    expect(result).toBe(false);
  });
});
