function numberSteps(n: number): number {
  if (n < 0) {
    return 0;
  }
  if (n == 0 || n == 1) {
    return 1;
  }
  return numberSteps(n - 1) + numberSteps(n - 2) + numberSteps(n - 3);
}

// console.log(result)
if (import.meta.vitest) {
  const { expect, it } = import.meta.vitest;
  it("counts all possible number of steps using 1, 2 or 3 steps", () => {
    let result1 = numberSteps(1);
    let result2 = numberSteps(4);
    let result3 = numberSteps(8);
    let result4 = numberSteps(11);

    expect(result1).toBe(1);
    expect(result2).toBe(7);
    expect(result3).toBe(81);
    expect(result4).toBe(504);
  });
}
