export const amountCounterTest = (value: number) => {
  if (value <= 1 || value >= 9) {
    return false;
  }
  return true;
};
