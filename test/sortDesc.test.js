const { sortDesc } = require("../index");

describe("sortDesc function", () => {
  test("should sort an array of integers from largest to smallest", () => {
    const arr = [3, 7, 2, 1, 8, 4, 5, 6];
    const expected = [8, 7, 6, 5, 4, 3, 2, 1];
    const result = sortDesc(arr);
    expect(result).toEqual(expected);
  });
});
