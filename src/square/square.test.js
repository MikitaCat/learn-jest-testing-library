const square = require("./square");

describe("square", () => {
  beforeEach(() => {
    //Working before every test
  });
  beforeAll(() => {
    //Working once before every tests
  });
  test("Corrent Value", () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
  });

  afterEach(() => {
    //Working before every test
  });

  afterAll(() => {
    //Working after all the tests
  });
});

//We can use many expect() in one test()

//When we group the tests using describe(), we have an oportunity to make any operations before the tests starting

//beforeEach() function is working before every test

//beforAll() function is working only once before trarting all the tests

//afterEach() and afterAll() functions is working the same as beforEach() and beforeAll, but they work AFTER the tests
