import { amountCounterTest } from "../amountCounterTest";

describe("Test how work amount counter", () => {
  it("should return correct value counter", () => {
    expect(amountCounterTest(5)).toBe(true);
  });
  it("should return incorrect value, less than the required value ", () => {
    expect(amountCounterTest(0)).toBe(false);
  });
  it("should return incorrect value, more than the required value ", () => {
    expect(amountCounterTest(10)).toBe(false);
  });
  it("should return value is not equal to zero", () => {
    expect(amountCounterTest(10)).not.toBeUndefined();
  });
});
