// Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(); // Dummy head node for the resulting linked list
  let current = dummyHead; // Pointer to the current node in the resulting list
  let carry = 0; // Carry from sum of previous nodes

  while (l1 !== null || l2 !== null || carry !== 0) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(sum / 10); // Calculate carry for the next step
    current.next = new ListNode(sum % 10); // Create a new node with the sum's digit
    current = current.next; // Move the current pointer to the newly created node

    l1 = l1?.next ?? null; // Move to the next node in l1 if it exists, else set to null
    l2 = l2?.next ?? null; // Move to the next node in l2 if it exists, else set to null
  }

  return dummyHead.next; // Return the next node after the dummy head, which is the start of the resulting list
}




export function addTwoNumbersRecursive(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null {
  if (!l1 && !l2 && !carry) return null;

  const l1Val = l1 ? l1.val : 0;
  const l2Val = l2 ? l2.val : 0;
  const total = l1Val + l2Val + carry;

  const newCarry = Math.floor(total / 10);
  const sumDigit = total % 10;

  const newNode = new ListNode(sumDigit);
  newNode.next = addTwoNumbersRecursive(l1?.next, l2?.next, newCarry);
  
  if (newCarry > 0 && !newNode.next) {
    newNode.next = new ListNode(newCarry);
  }

  return newNode;
}

