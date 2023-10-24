interface OperatorFunction {
  (a: number, b: number): number;
}
export function evalRPN(tokens: string[]) {
  const stack = [];

  const operators = new Map<string, OperatorFunction>();
  operators.set("+", (a, b) => a + b);
  operators.set("-", (a, b) => a - b);
  operators.set("*", (a, b) => a * b);
  operators.set("/", (a, b) => (b !== 0 ? a / b : 0));

  for (let t of tokens) {
    if (operators.has(t)) {
      const operandOne = stack.pop();
      const operandTwo = stack.pop();

      if (operandOne === undefined || operandTwo === undefined) {
        return NaN; // Incomplete RPN expression
      }
      stack.push(operators.get(t)(operandTwo, operandOne));
    } else if (!isNaN(Number(t)) && t !== "") {
      stack.push(Number(t));
    } else {
      return NaN;
    }
  }

  if (stack.length !== 1) {
    return NaN; // Incomplete or invalid RPN expression
  }

  return stack.pop();
}
