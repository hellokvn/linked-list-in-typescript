import { Node } from './node';

export class LinkedList {
  public head: Node;
  public tail: Node;
  public length: number;

  constructor(value?: unknown) {
    if (!value) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return;
    }

    const node: Node = new Node(value);

    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  public append(value: unknown): Node {
    const node: Node = new Node(value);

    if (!this.length) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;

    return node;
  }

  public prepend(value: unknown): Node {
    const node: Node = new Node(value);

    if (!this.length) {
      this.tail = node;
    } else {
      node.next = this.head;
    }

    this.head = node;
    this.length++;

    return node;
  }

  public shift(): Node | undefined {
    if (!this.length) return undefined;

    const node: Node = this.head;

    node.next = null;
    this.head = this.head.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return node;
  }

  public pop(): Node | undefined {
    if (!this.head) return undefined;

    let temp: Node = this.head;
    let pre: Node = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = undefined;
      this.tail = undefined;
    }

    return temp;
  }

  public get(index: number): Node | undefined {
    if (index < 0 || index >= this.length) return;

    let node: Node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  public set(index: number, value: unknown): Node | undefined {
    const node: Node | undefined = this.get(index);

    if (!node) return;

    node.value = value;

    return node;
  }

  public insert(index: number, value: unknown): Node | undefined {
    if (!index) return this.prepend(value);
    if (index === this.length) return this.append(value);
    if (index < 0 || index > this.length) return;

    const newNode: Node = new Node(value);
    const temp: Node = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;

    return newNode;
  }

  public remove(index: number): Node | undefined {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return;

    const before: Node = this.get(index - 1);
    const node: Node = before.next;

    before.next = node.next;
    node.next = null;

    this.length--;

    return node;
  }
}
