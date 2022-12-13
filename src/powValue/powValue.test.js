const powValue = require("./powValue");

describe("powValue", () => {
  test("Value 2!!!", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    powValue(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test("Value 1!!!", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    powValue(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  afterEach(() => {
    //Clearing the mocks after every test
    jest.clearAllMocks();
  });
});

//We can use spyOn for method searching, than we can use ToBeCalledTimes() and searching for the number of method invokes
//So, we can mock the data. And the mocks saves in cache
//We should use jest.clearAllMocks() inside the afterEach() for correct work
