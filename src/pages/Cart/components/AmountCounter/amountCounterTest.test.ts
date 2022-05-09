import { amountCounterTest } from "./amountCounterTest";

describe("Test how work amount counter", () => {
  test("Test correct work counter", () => {
    expect(amountCounterTest(5)).toBe(true);
  });
  test("Test for an incorrect value, less than the required value ", () => {
    expect(amountCounterTest(0)).toBe(false);
  });
  test("Test for an incorrect value, more than the required value ", () => {
    expect(amountCounterTest(10)).toBe(false);
  });
  test("Test that the value is not equal to zero", () => {
    expect(amountCounterTest(10)).not.toBeUndefined();
  });
});
