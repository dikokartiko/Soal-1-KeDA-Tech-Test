const { sortAsc } = require("../index");

describe("sortAsc function", () => {
  test("should sort an array of integers from smallest to largest", () => {
    const arr = [3, 7, 2, 1, 8, 4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8];
    const result = sortAsc(arr);
    expect(result).toEqual(expected);
  });
});
