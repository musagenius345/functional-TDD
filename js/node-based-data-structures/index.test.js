import { Node, LinkedList, Queue, DoublyLinkedList } from "./index";

describe("Node Class", () => {
  test("creates a node with provided data", () => {
    const data = 42;
    const node = new Node(data);
    expect(node.data).toBe(data);
    expect(node.next).toBe(null);
  });
});

describe("LinkedList Class", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("initializes an empty linked list", () => {
    expect(list.head).toBeNull();
  });

  test("adds elements to the linked list", () => {
    list.add(1);
    list.add(2);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
  });

  test("checks if the list is empty", () => {
    expect(list.isEmpty()).toBe(true);
    list.add(1);
    expect(list.isEmpty()).toBe(false);
  });

  test("deletes elements from the linked list by index", () => {
    list.add(1);
    list.add(2);
    list.add(3);

    list.delete(1);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(3);

    list.delete(1);
    expect(list.head.data).toBe(1);
    expect(list.head.next).toBeNull();
  });

  test("returns the size of the linked list", () => {
    expect(list.size()).toBe(0);
    list.add(1);
    list.add(2);
    expect(list.size()).toBe(2);
  });

  test("checks if the list contains a specific element", () => {
    list.add(1);
    list.add(2);
    expect(list.contains(2)).toBe(true);
    expect(list.contains(3)).toBe(false);
  });

  test("gets the data at a specific index", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.get(1)).toBe(2);
    expect(list.get(3)).toBeNull();
  });

  test("sets the data at a specific index", () => {
    list.add(1);
    list.add(2);
    list.set(1, 42);
    expect(list.head.next.data).toBe(42);
  });

  test("creates a sublist from the linked list", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    const sublist = list.subList(1, 3);
    expect(sublist.toArray()).toEqual([2, 3]);
  });

  test("converts the linked list to an array", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test("removes an element from the linked list", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.remove(2);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(3);
  });

  test("clears the linked list", () => {
    list.add(1);
    list.add(2);
    list.clear();
    expect(list.head).toBeNull();
  });
});

describe("LinkedList insertBefore Method", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.add(1);
    list.add(3);
    list.add(4);
  });

  test("inserts data before the specified index", () => {
    list.insertBefore(2, 1);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });

  test("inserts data before the head node", () => {
    list.insertBefore(0, 0);
    expect(list.toArray()).toEqual([0, 1, 3, 4]);
  });

  test("inserts data before the last node", () => {
    list.insertBefore(5, 2);
    expect(list.toArray()).toEqual([1, 3, 5, 4]);
  });
});

describe("LinkedList insertAfter Method", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.add(1);
    list.add(3);
    list.add(4);
  });

  test("inserts data after the specified index", () => {
    list.insertAfter(2, 0);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });

  test("inserts data after the last node", () => {
    list.insertAfter(5, 2);
    expect(list.toArray()).toEqual([1, 3, 4, 5]);
  });

  test("throws RangeError when inserting after an index that does not exist", () => {
    expect(() => {
      list.insertAfter(0, -1);
    }).toThrow(RangeError);
    expect(list.toArray()).toEqual([1, 3, 4]);
  });
});

describe("LinkedList indexOf Method", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
    list.add(1);
    list.add(3);
    list.add(4);
  });

  test("returns correct index for existing data", () => {
    expect(list.indexOf(3)).toBe(1);
  });

  test("returns -1 for non-existing data", () => {
    expect(list.indexOf(2)).toBe(-1);
  });

  test("returns correct index for head node data", () => {
    expect(list.indexOf(1)).toBe(0);
  });
});

describe("DoublyLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  // Test for set method
  describe("set", () => {
    it("should set the value at the specified index", () => {
      list.add(1);
      list.add(2);
      list.set(1, 3);
      expect(list.toArray()).toEqual([1, 3]);
    });

    it("should handle setting value at the head index", () => {
      list.add(1);
      list.add(2);
      list.set(0, 3);
      expect(list.toArray()).toEqual([3, 2]);
    });

    it("should handle setting value at the tail index", () => {
      list.add(1);
      list.add(2);
      list.set(1, 3);
      expect(list.toArray()).toEqual([1, 3]);
    });
  });

  // Test for get method
  describe("get", () => {
    it("should get the value at the specified index", () => {
      list.add(1);
      list.add(2);
      expect(list.get(1)).toBe(2);
    });

    it("should return null for out-of-bounds index", () => {
      expect(list.get(0)).toBeNull();
    });

    it("should return null for negative index", () => {
      expect(list.get(-1)).toBeNull();
    });
  });

  // Test for add method
  describe("add", () => {
    it("should add elements to the list", () => {
      list.add(1);
      list.add(2);
      expect(list.toArray()).toEqual([1, 2]);
    });

    it("should increase size after adding elements", () => {
      list.add(1);
      list.add(2);
      expect(list.size()).toBe(2);
    });
  });

  describe("removeFirstNode", () => {
    test("returns removed node", () => {
      list.add(801), list.add(212), list.add(43);
      const result = list.removeFirstNode();
      const arr = list.toArray();
      expect(result.data).toBe;
      expect(arr).toStrictEqual([212, 43]);
    });
  });

  // Test for subList method
  describe.skip("subList", () => {
    it("should return a sublist from the specified indices", () => {
      list.add(1);
      list.add(2);
      list.add(3);
      list.add(4);
      const sublist = list.subList(1, 3);
      expect(sublist?.toArray()).toEqual([2, 3, 4]);
    });

    it("should return null for invalid indices", () => {
      list.add(1);
      list.add(2);
      const sublist = list.subList(-1, 3);
      expect(sublist).toBeNull();
    });

    it("should return an empty list for indices out of bounds", () => {
      list.add(1);
      list.add(2);
      const sublist = list.subList(2, 4);
      expect(sublist?.toArray()).toEqual([]);
    });
  });

  // Test for remove method
  describe("remove", () => {
    it("should remove the specified element from the list", () => {
      list.add(1);
      list.add(2);
      list.remove(2);
      expect(list.toArray()).toEqual([1]);
    });

    it("should not modify the list if the element is not found", () => {
      list.add(1);
      list.add(2);
      list.remove(3);
      expect(list.toArray()).toEqual([1, 2]);
    });

    it("should handle removing the last element from the list", () => {
      list.add(1);
      list.remove(1);
      expect(list.toArray()).toEqual([]);
    });
  });

  // Test for contains method
  describe("contains", () => {
    it("should return true if the element is in the list", () => {
      list.add(1);
      list.add(2);
      expect(list.contains(2)).toBe(true);
    });

    it("should return false if the element is not in the list", () => {
      list.add(1);
      list.add(2);
      expect(list.contains(3)).toBe(false);
    });

    it("should return false for an empty list", () => {
      expect(list.contains(1)).toBe(false);
    });
  });

  // Test for size method
  describe("size", () => {
    it("should return the correct size of the list", () => {
      list.add(1);
      list.add(2);
      expect(list.size()).toBe(2);
    });

    it("should return 0 for an empty list", () => {
      expect(list.size()).toBe(0);
    });

    it("should return the correct size after removing elements", () => {
      list.add(1);
      list.add(2);
      list.remove(1);
      expect(list.size()).toBe(1);
    });
  });

  // Test for clear method
  describe("clear", () => {
    it("should clear all elements from the list", () => {
      list.add(1);
      list.add(2);
      list.clear();
      expect(list.toArray()).toEqual([]);
    });

    it("should set the size to 0 after clearing the list", () => {
      list.add(1);
      list.add(2);
      list.clear();
      expect(list.size()).toBe(0);
    });

    it("should clear an empty list without errors", () => {
      list.clear();
      expect(list.toArray()).toEqual([]);
    });
  });
});

describe(" Queues", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
    queue.enqueue(15);
  });

  test("read and enqueue", () => {
    const head = queue.read();
    expect(head.data).toBe(15);
  });

  test("dequeue", () => {
    const result = queue.dequeue();
    expect(result.data).toBe(15);
  });
});
