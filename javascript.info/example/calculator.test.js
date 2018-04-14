import { assert } from "chai";
import { add } from "./calculator";
describe("App", function() {
  it("should say", function() {
    assert.equal(add(4,6), 10);
  });
});
