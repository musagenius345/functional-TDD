var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function reverseList(head) {
    var prev = null;
    var current = head;
    while (current !== null) {
        var nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}
var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;
var solution = reverseList(node1);
function convertToArray(head) {
    var result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}
console.log(convertToArray(solution));
