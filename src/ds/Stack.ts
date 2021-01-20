export class Stack<E> {
  private length: number = 0;

  private list: Array<E>;

  constructor(capacity = 255) {

    this.list = new Array(capacity);
  }

  push(element: E) {
    this.list[this.length++] = element;
  }

  isEmpty(): boolean {
    return !!this.length;
  }

  pop(): E | null {
    if (!this.length) return null;

    return this.list[--this.length];
  }

  peek(): E | null {
    return this.length ? this.list[this.length - 1] : null;
  }
}