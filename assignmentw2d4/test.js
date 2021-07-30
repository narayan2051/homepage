

describe("filter", function () {
  it("Return the string with removing bad words", () => {
    assert.equal("My name is Narayan".filter("name", "is"), "My Narayan");
  })
});

describe("Bubble sort", function () {
  it("Return array in ascending order using bubble sort", () => {
    assert.deepEqual([6, 0, -2, 4, 3, 1].bubblesSort(), [-2, 0, 1, 3, 4, 6]);
  });
});

describe("Teacher", function () {
  it("Returns the teachers name with currently teaching course name", () => {
    var teacher = new Teacher();
    teacher.initialize("Narayan", 27);
    assert.deepEqual(teacher.teach("WAP"),"Narayan is now teaching WAP");
  });
});