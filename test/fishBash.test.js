const { fishBash } = require("../index");

describe("fishBash function", () => {
  test("should print numbers from 1 to n, replacing multiples of 3 with fish, multiples of 5 with bash, and multiples of 15 with fish bash", () => {
    const consoleSpy = jest.spyOn(console, "log");
    fishBash(5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "1");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "2");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "fish");
    expect(consoleSpy).toHaveBeenNthCalledWith(4, "4");
    expect(consoleSpy).toHaveBeenNthCalledWith(5, "bash");
    consoleSpy.mockRestore();
  });
});
