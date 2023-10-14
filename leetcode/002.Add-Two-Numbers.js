"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTwoNumbersRecursive = exports.addTwoNumbers = exports.ListNode = void 0;
// Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val !== null && val !== void 0 ? val : 0;
        this.next = next !== null && next !== void 0 ? next : null;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
function addTwoNumbers(l1, l2) {
    var _a, _b, _c, _d;
    var dummyHead = new ListNode(); // Dummy head node for the resulting linked list
    var current = dummyHead; // Pointer to the current node in the resulting list
    var carry = 0; // Carry from sum of previous nodes
    while (l1 !== null || l2 !== null || carry !== 0) {
        var sum = ((_a = l1 === null || l1 === void 0 ? void 0 : l1.val) !== null && _a !== void 0 ? _a : 0) + ((_b = l2 === null || l2 === void 0 ? void 0 : l2.val) !== null && _b !== void 0 ? _b : 0) + carry;
        carry = Math.floor(sum / 10); // Calculate carry for the next step
        current.next = new ListNode(sum % 10); // Create a new node with the sum's digit
        current = current.next; // Move the current pointer to the newly created node
        l1 = (_c = l1 === null || l1 === void 0 ? void 0 : l1.next) !== null && _c !== void 0 ? _c : null; // Move to the next node in l1 if it exists, else set to null
        l2 = (_d = l2 === null || l2 === void 0 ? void 0 : l2.next) !== null && _d !== void 0 ? _d : null; // Move to the next node in l2 if it exists, else set to null
    }
    return dummyHead.next; // Return the next node after the dummy head, which is the start of the resulting list
}
exports.addTwoNumbers = addTwoNumbers;
function addTwoNumbersRecursive(l1, l2, carry) {
    if (carry === void 0) { carry = 0; }
    if (!l1 && !l2 && !carry)
        return null;
    var total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
    carry = parseInt(total / 10 + '', 10);
    return new ListNode(total % 10, addTwoNumbers(l1 === null || l1 === void 0 ? void 0 : l1.next, l2 === null || l2 === void 0 ? void 0 : l2.next, carry));
}
exports.addTwoNumbersRecursive = addTwoNumbersRecursive;
