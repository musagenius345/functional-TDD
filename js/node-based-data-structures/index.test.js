

import { Node,  LinkedList } from './index';


describe('Node Class', () => {
  test('creates a node with provided data', () => {
    const data = 42;
    const node = new Node(data);
    expect(node.data).toBe(data);
    expect(node.next).toBe(null);
  });
});

describe('LinkedList Class', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('initializes an empty linked list', () => {
    expect(list.head).toBeNull();
  });

  test('adds elements to the linked list', () => {
    list.add(1);
    list.add(2);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(2);
  });

  test('checks if the list is empty', () => {
    expect(list.isEmpty()).toBe(true);
    list.add(1);
    expect(list.isEmpty()).toBe(false);
  });

  test('deletes elements from the linked list by index', () => {
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

  test('returns the size of the linked list', () => {
    expect(list.size()).toBe(0);
    list.add(1);
    list.add(2);
    expect(list.size()).toBe(2);
  });

  test('checks if the list contains a specific element', () => {
    list.add(1);
    list.add(2);
    expect(list.contains(2)).toBe(true);
    expect(list.contains(3)).toBe(false);
  });

  test('gets the data at a specific index', () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.get(1)).toBe(2);
    expect(list.get(3)).toBeNull();
  });

  test('sets the data at a specific index', () => {
    list.add(1);
    list.add(2);
    list.set(1, 42);
    expect(list.head.next.data).toBe(42);
  });

  test('creates a sublist from the linked list', () => {
    list.add(1);
    list.add(2);
    list.add(3);
    const sublist = list.subList(1, 3);
    expect(sublist.toArray()).toEqual([2, 3]);
  });

  test('converts the linked list to an array', () => {
    list.add(1);
    list.add(2);
    list.add(3);
    expect(list.toArray()).toEqual([1, 2, 3]);
  });

  test('removes an element from the linked list', () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.remove(2);
    expect(list.head.data).toBe(1);
    expect(list.head.next.data).toBe(3);
  });

  test('clears the linked list', () => {
    list.add(1);
    list.add(2);
    list.clear();
    expect(list.head).toBeNull();
  });
});
