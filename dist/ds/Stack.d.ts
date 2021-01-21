export declare class Stack<E> {
    private length;
    private list;
    constructor(capacity?: number);
    /**
     * @description Push an element to the stack
     * @param {E} element
     */
    push(element: E): void;
    /**
     * @description Is the stack empty?
     * @return {boolean}
     */
    isEmpty(): boolean;
    /**
   * @description Removes an element from the top of the stack and return it
   * @return {E | null} element
   */
    pop(): E | null;
    /**
    * @description Returns the element at the top of the stack
    * @return {E | null} element
    */
    peek(): E | null;
}
