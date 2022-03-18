export class Node {
  public value: unknown;
  public next: Node | null;

  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }
}
