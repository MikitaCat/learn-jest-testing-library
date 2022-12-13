const mapArrToString = require("./mapArrayToString");

describe("mapArrToString", () => {
  test("Right Value", () => {
    expect(mapArrToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("Array with different data types", () => {
    expect(mapArrToString([1, 2, 3, null, undefined, "asasas"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("Negation test", () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual(["1", "2", "3", "4"]);
  });
});

//We can use toEqual() method, when we want to compare the values of object or arrays
//When we expect that values are not matches we can use .not. between the ecpect() function and its method
