import { ListNode } from "../../leetcode/0002.Add-Two-Numbers";
export function convertToArray(head: ListNode | null): any[] {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}
