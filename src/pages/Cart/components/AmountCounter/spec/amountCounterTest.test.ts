import { amountCounterTest } from "../amountCounterTest";

describe("amountCounter unit tests", () => {
  it("should return true when count is 5", () => {
    expect(amountCounterTest(5)).toBeFalsy();
  });
  it("should return incorrect value, less than the required value ", () => {
    expect(amountCounterTest(0)).toBeTruthy();
  });
  it("should return incorrect value, more than the required value ", () => {
    expect(amountCounterTest(10)).toBeTruthy();
  });
  it("should return value is not equal to zero", () => {
    expect(amountCounterTest(10)).not.toBeUndefined();
  });
});
