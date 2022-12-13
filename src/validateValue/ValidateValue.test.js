const validateValue = require("./validateValue");

test("Validation of the value", () => {
  expect(validateValue(50)).toBe(true);
});

//This is the main test function:
//As a first argument it takes a description of the test
//As the second argument it takes a callback function with tests
//We should use expect() function into the callback
//We can invoke the function we want to test inside expect()
//Then we can use a methods of the expect() to designate the expected result

describe("Validate value", () => {
  test("Right value", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("Less then correct", () => {
    expect(validateValue(-1)).toBe(false);
  });

  test("More then correct", () => {
    expect(validateValue(101)).toBe(false);
  });

  test("Low border value", () => {
    expect(validateValue(0)).toBe(true);
  });

  test("High border value", () => {
    expect(validateValue(100)).toBe(true);
  });
});

//If we want to write a group of tests, we should to use describe() function
//As a first argument it takes a description of the group of tests
//As a second argument it takes a callback function
//Inside the callback function we can invoke a group of the test() function
