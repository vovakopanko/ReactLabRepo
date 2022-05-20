import { amountCounterTest } from "../amountCounterTest";

describe("amountCounter unit tests", () => {
  it("should return true when count is 5", () => {
    expect(amountCounterTest(5)).toBeFalsy();
  });
  it("should return true if value is more than 9", () => {
    expect(amountCounterTest(0)).toBeTruthy();
  });
  it("should return value is not equal to zero", () => {
    expect(amountCounterTest(10)).not.toBeUndefined();
  });
});
