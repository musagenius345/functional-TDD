import { describe, it, expect } from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest';
import { identity, addb, subb, mulb, minb, maxb, add, sub, mul, min, max, addRecurse, mulRecurse, minRecurse, maxRecurse } from './musagenius345.js';

// Test suite for the identity function
describe('identity', () => {
  it('should return the argument unchanged', () => {
    const result = identity(3);
    expect(result).to.equal(3);
  });
});

// Test suite for the addb function
describe('addb', () => {
  it('should return the sum of two numbers', () => {
    const result = addb(3, 4);
    expect(result).to.equal(7);
  });
});

// Test suite for the subb function
describe('subb', () => {
  it('should return the difference of two numbers', () => {
    const result = subb(3, 4);
    expect(result).to.equal(-1);
  });
});

// Test suite for the mulb function
describe('mulb', () => {
  it('should return the product of two numbers', () => {
    const result = mulb(3, 4);
    expect(result).to.equal(12);
  });
});

// Test suite for the minb function
describe('minb', () => {
  it('should return the smaller of two numbers', () => {
    const result = minb(3, 4);
    expect(result).to.equal(3);
  });
});

// Test suite for the maxb function
describe('maxb', () => {
  it('should return the larger of two numbers', () => {
    const result = maxb(3, 4);
    expect(result).to.equal(4);
  });
});

// Test suite for the add function
describe('add', () => {
  it('should return the sum of any number of arguments', () => {
    const result = add(1, 2, 4);
    expect(result).to.equal(7);
  });

  it('should return 0 for no arguments', () => {
    const result = add();
    expect(result).to.equal(0);
  });

  it('should handle negative numbers', () => {
    const result = add(-5, 10, -15);
    expect(result).to.equal(-10);
  });

  it('should handle floating-point numbers', () => {
    const result = add(1.5, 2.5);
    expect(result).to.equal(4);
  });
});

// Test suite for the sub function
describe('sub', () => {
  it('should return the difference of any number of arguments', () => {
    const result = sub(1, 2, 4);
    expect(result).to.equal(-5);
  });

  // it('should return 0 for no arguments', () => {
  //   const result = sub();
  //   expect(result).to.equal(0);
  // });

  it('should handle negative numbers', () => {
    const result = sub(10, -5, -15);
    expect(result).to.equal(30);
  });

  it('should handle floating-point numbers', () => {
    const result = sub(5.5, 2.5);
    expect(result).to.equal(3);
  });
});

// Test suite for the mul function
describe('mul', () => {
  it('should return the product of any number of arguments', () => {
    const result = mul(1, 2, 4);
    expect(result).to.equal(8);
  });

  // it('should return 0 for no arguments', () => {
  //   const result = mul();
  //   expect(result).to.equal(0);
  // });

  it('should handle negative numbers', () => {
    const result = mul(-2, 5, -3);
    expect(result).to.equal(30);
  });

  it('should handle floating-point numbers', () => {
    const result = mul(2.5, 0.5);
    expect(result).to.equal(1.25);
  });
});

// Test suite for the min function
describe('min', () => {
  it('should return the smallest of any number of arguments', () => {
    const result = min(1, 2, 4);
    expect(result).to.equal(1);
  });

  // it('should return NaN for no arguments', () => {
  //   const result = min();
  //   expect(Number.isNaN(result)).to.equal(true);
  // })

  it('should handle negative numbers', () => {
    const result = min(-5, 10, -15);
    expect(result).to.equal(-15);
  });

  it('should handle floating-point numbers', () => {
    const result = min(1.5, 2.5, -1.5);
    expect(result).to.equal(-1.5);
  });
});

// Test suite for the max function
describe('max', () => {
  it('should return the largest of any number of arguments', () => {
    const result = max(1, 2, 4);
    expect(result).to.equal(4);
  });

  // it('should return NaN for no arguments', () => {
  //   const result = max();
  //   expect(Number.isNaN(result)).to.equal(true);
  // });

  it('should handle negative numbers', () => {
    const result = max(-5, 10, -15);
    expect(result).to.equal(10);
  });

  it('should handle floating-point numbers', () => {
    const result = max(1.5, 2.5, -1.5);
    expect(result).to.equal(2.5);
  });
});

// Test suite for the addRecurse function
describe('addRecurse', () => {
  it('should return the sum of any number of arguments using recursion', () => {
    const result = addRecurse(1, 2, 4);
    expect(result).to.equal(7);
  });

  it('should return 0 for no arguments', () => {
    const result = addRecurse();
    expect(result).to.equal(0);
  });

  it('should handle negative numbers', () => {
    const result = addRecurse(-5, 10, -15);
    expect(result).to.equal(-10);
  });

  it('should handle floating-point numbers', () => {
    const result = addRecurse(1.5, 2.5);
    expect(result).to.equal(4);
  });
});

// Test suite for the mulRecurse function
describe('mulRecurse', () => {
  it('should return the product of any number of arguments using recursion', () => {
    const result = mulRecurse(1, 2, 4);
    expect(result).to.equal(8);
  });

  it('should return 0 for no arguments', () => {
    const result = mulRecurse();
    expect(result).to.equal(0);
  });

  it('should handle negative numbers', () => {
    const result = mulRecurse(-2, 5, -3);
    expect(result).to.equal(30);
  });

  it('should handle floating-point numbers', () => {
    const result = mulRecurse(2.5, 0.5);
    expect(result).to.equal(1.25);
  });
});

// Test suite for the minRecurse function
describe('minRecurse', () => {
  it('should return the smallest of any number of arguments using recursion', () => {
    const result = minRecurse(1, 2, 4);
    expect(result).to.equal(1);
  });

  it('should return NaN for no arguments', () => {
    const result = minRecurse();
    expect(Number.isNaN(result)).to.equal(true);
  });

  it('should handle negative numbers', () => {
    const result = minRecurse(-5, 10, -15);
    expect(result).to.equal(-15);
  });

  it('should handle floating-point numbers', () => {
    const result = minRecurse(1.5, 2.5, -1.5);
    expect(result).to.equal(-1.5);
  });
});

// Test suite for the maxRecurse function
describe('maxRecurse', () => {
  it('should return the largest of any number of arguments using recursion', () => {
    const result = maxRecurse(1, 2, 4);
    expect(result).to.equal(4);
  });

  it('should return NaN for no arguments', () => {
    const result = maxRecurse();
    expect(Number.isNaN(result)).to.equal(true);
  });

  it('should handle negative numbers', () => {
    const result = maxRecurse(-5, 10, -15);
    expect(result).to.equal(10);
  });

  it('should handle floating-point numbers', () => {
    const result = maxRecurse(1.5, 2.5, -1.5);
    expect(result).to.equal(2.5);
  });
});
