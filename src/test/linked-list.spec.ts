import { LinkedList } from '../linked-list';

describe('Basic Linked List Tests', () => {
  let list: LinkedList;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('empty list has a length of 0', () => {
    expect(list.length).toBe(0);
  });

  test("empty list's head is null", () => {
    expect(list.head).toBe(null);
  });

  test("empty list's tail is null", () => {
    expect(list.head).toBe(null);
  });

  test('add 1 node, length is 1', () => {
    list.append('foo');

    expect(list.length).toBe(1);
  });

  test('add and remove 1 node, length is 0', () => {
    list.append('foo');
    list.shift();

    expect(list.length).toBe(0);
  });

  test('add and remove 1 node, length is 0', () => {
    list.append('foo');
    list.remove(0);

    expect(list.length).toBe(0);
  });
});
