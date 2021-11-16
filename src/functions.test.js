const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract,
} = require("./functions");

test("returnTwo should return the integer 2", () => {
  expect(returnTwo()).toBe(2);
});

describe("greeting tests", () => {
  // test # 1
  test("greeting(James) should equal hello, James", () => {
    expect(greeting("James")).toEqual("Hello, James.");
  });

  // test #2
  test("greeting(Jill) should equal hello, Jill", () => {
    expect(greeting("Jill")).toEqual("Hello, Jill.");
  });
});

describe("add tests", () => {
  // test #1
  test("the sum of 1 and 2 should equal 3", () => {
    expect(add(1, 2)).toEqual(3);
  });

  // test #2
  test("the sum of 5 and 9 should equal 14", () => {
    expect(add(5, 9)).toEqual(14);
  });
});

describe("Math functions", () => {
  // test #1
  test("the * of 3 and 5 is 15", () => {
    expect(multiply(3, 5)).toBe(15);
  });

  // test #2
  test("the / of 6 and 3 is 2", () => {
    expect(divide(6, 3)).toEqual(2);
  });

  // test #3
  test("the - of 12 and 2 is 10", () => {
    expect(subtract(12, 2)).toBe(10);
  });
});
