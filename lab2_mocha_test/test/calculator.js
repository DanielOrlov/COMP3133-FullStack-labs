const { add, mul, div, sub } = require("../app/calculator.js");
const { assert } = require("chai");

describe("add", () => {
  it("add(5, 2) expected result 7 PASS", function () {
    assert.equal(add(5, 2), 7);
  });
  it("add(5,2) expected result 8 FAIL", function () {
    assert.equal(add(5, 2), 8);
  });
});

describe("sub", () => {
  it("sub(5, 2) expected result 3 PASS", function () {
    assert.equal(sub(5, 2), 3);
  });
  it("sub(5,2) expected result 5 FAIL", function () {
    assert.equal(sub(5, 2), 5);
  });
});

describe("mul", () => {
  it("mul(5, 2) expected result 10 PASS", function () {
    assert.equal(mul(5, 2), 10);
  });
  it("mul(5,2) expected result 12 FAIL", function () {
    assert.equal(mul(5, 2), 12);
  });
});

describe("div", () => {
  it("div(10, 2) expected result 5 PASS", function () {
    assert.equal(div(10, 2), 5);
  });
  it("div(10,2) expected result 2 FAIL", function () {
    assert.equal(div(10, 2), 2);
  });
});
