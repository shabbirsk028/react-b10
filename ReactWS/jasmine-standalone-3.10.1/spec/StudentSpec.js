describe("Student test suite", () => {
  // Setup and teardown methods
  // beforeEach() and afterEach() - before and after for every test suite.
  // beforeAll() and afterAll()   - runs before and after all test suites.

  // Matchers
  // toContain()
  // toBeTruthy()
  // toBeFalsy()
  // not.toBe()
  // toMatch()

  // toBeCloseTo() - matches near value
  // toBeDefined() - verifies variable defined or not
  // toBeUndefined()
  // toBeNull()
  // toBeGreaterThan()
  // toBeLessThan()
  // toBeNaN() - 10/0
  // toEqual()

  var student;
  beforeEach(() => {
    console.log("beforeEach");
    student = new Student(101, "Ram", 20);
  });
  afterEach(() => {
    console.log("afterEach");
    student = null;
  });

  it("verify getRollNo() method", () => {
    expect(student.getRollNo()).toBe(101);
  });

  it("verify getName() method", () => {
    expect(student.getName()).toBe("Ram");
  });

  it("verify setName() method", () => {
    student.setName("Sam");
    expect(student.getName()).toBe("Sam");
  });

  // ref comparision -
  // x -skip test case
  xit("toBe()", () => {
    const std1 = new Student(101, "Ram", 20);
    const std2 = new Student(101, "Ram", 20);
    expect(std1).toBe(std2); // == - ref comparision
  });

  // content comparision
  // f - focus
  it("toEqual()", () => {
    const std1 = new Student(101, "Ram", 20);
    const std2 = new Student(101, "Ram", 20);
    expect(std1).toEqual(std2); // == - content comparision
  });

  it("toBeTruthy()", () => {
    expect(true).toBeTruthy();
  });

  it("toBeFalsy()", () => {
    expect(false).toBeFalsy();
  });

  it("toContains()", () => {
    expect("Hello World").toContain("World");
  });

  it("toMatch()", () => {
    expect("Hello World").toMatch("[a-zA-Z]+");
  });
});
