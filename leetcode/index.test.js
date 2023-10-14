
import { addTwoNumbers, ListNode } from './index.js';

describe('addTwoNumbers', () => {
  it('adds two numbers correctly', () => {
    // Test Case 1
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const expectedSum1 = new ListNode(7, new ListNode(0, new ListNode(8)));
    expect(addTwoNumbers(l1, l2)).toEqual(expectedSum1);

    // Test Case 2
    const l3 = new ListNode(0);
    const l4 = new ListNode(0);
    const expectedSum2 = new ListNode(0);
    expect(addTwoNumbers(l3, l4)).toEqual(expectedSum2);

    // Test Case 3
    const l5 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
    const l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
    const expectedSum3 = new ListNode(8, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))));
    expect(addTwoNumbers(l5, l6)).toEqual(expectedSum3);
  });

  it('handles edge cases', () => {
    // Test Case: One list is empty
    const l1 = null;
    const l2 = new ListNode(1);
    expect(addTwoNumbers(l1, l2)).toEqual(l2);

    // Test Case: Both lists are empty
    expect(addTwoNumbers(null, null)).toBeNull();
  });
});

