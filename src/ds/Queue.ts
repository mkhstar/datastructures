export class Queue<E> {
  private head: number = -1;
  private tail: number = -1;

  private list: Array<E>;

  constructor(capacity: number = 50) {
    this.list = new Array(capacity);
  }

  /**
   * @description Is the Queue empty
   * @return {boolean}
   */
  get isEmpty(): boolean {
    return this.head === -1 && this.tail === -1;
  }

  /**
   * @description Is the Queue full
   * @return {boolean}
   */
  get isFull(): boolean {
    return (
      this.head !== -1 && this.tail !== -1 && this.nextTailIndex === this.head
    );
  }

  private get nextTailIndex(): number {
    if (this.isEmpty) return -1;

    return (this.tail + 1) % this.list.length;
  }

  private get nextHeadIndex(): number {
    if (this.isEmpty) return -1;

    return (this.head + 1) % this.list.length;
  }

  /**
   * @description Add an element to the queue
   * @param {E} element
   */
  enqueue(element: E) {
    if (this.isEmpty) this.head = this.tail = 0;
    else if (this.nextTailIndex === this.head) throw new Error("Queue is full");
    else this.tail = this.nextTailIndex;

    this.list[this.tail] = element;
  }

  /**
   * @description Remove an element from the queue and return it
   * @return {E | null}
   */
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

  /**
   * @description Returns the element at the head of the queue
   * @return {E | null}
   */

  peek(): E | null {
    if (this.isEmpty) return null;

    return this.list[this.head];
  }
}
