export class Stack<E> {
  private length: number = 0;

  private list: Array<E>;

  constructor(capacity = 255) {

    this.list = new Array(capacity);
  }

  /**
   * @description Push an element to the stack
   * @param {E} element 
   */
  push(element: E) {
    this.list[this.length++] = element;
  }

  /**
   * @description Is the stack empty?
   * @return {boolean}
   */

  isEmpty(): boolean {
    return !!this.length;
  }

    /**
   * @description Removes an element from the top of the stack and return it
   * @return {E | null} element 
   */

  pop(): E | null {
    if (!this.length) return null;

    return this.list[--this.length];
  }


   /**
   * @description Returns the element at the top of the stack
   * @return {E | null} element 
   */

  peek(): E | null {
    return this.length ? this.list[this.length - 1] : null;
  }
}