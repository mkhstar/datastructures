export class Queue<E> {
  private head: number = -1;
  private tail: number = -1;

  private list: Array<E>;

  constructor(capacity: number = 50) {
    this.list = new Array(capacity);
  }

  get isEmpty(): boolean {
    return this.head === -1 && this.tail === -1;
  }


  get isFull(): boolean {
      return this.head !== -1 && this.tail !== -1 && this.nextTailIndex === this.head;
  }

  private get nextTailIndex(): number {
    if (this.isEmpty) return -1;

    return (this.tail + 1) % this.list.length;
  }

  private get nextHeadIndex(): number {
    if (this.isEmpty) return -1;

    return (this.head + 1) % this.list.length;
  }

  enqueue(element: E) {
    if (this.isEmpty) this.head = this.tail = 0;
    else if (this.nextTailIndex === this.head) throw new Error("Queue is full");
    else this.tail = this.nextTailIndex;

    this.list[this.tail] = element;
  }

  dequeue(): E | null {
    if (this.isEmpty) return null;
    else if (this.head === this.tail) {
      const result = this.list[this.head];
      this.head = this.tail = -1;
      return result;
    }

    const result = this.list[this.head];
    this.head = this.nextHeadIndex;
    return result;
  }
}
