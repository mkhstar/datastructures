export declare class Queue<E> {
    private head;
    private tail;
    private list;
    constructor(capacity?: number);
    /**
     * @description Is the Queue empty
     * @return {boolean}
     */
    get isEmpty(): boolean;
    /**
     * @description Is the Queue full
     * @return {boolean}
     */
    get isFull(): boolean;
    private get nextTailIndex();
    private get nextHeadIndex();
    /**
     * @description Add an element to the queue
     * @param {E} element
     */
    enqueue(element: E): void;
    /**
     * @description Remove an element from the queue and return it
     * @return {E | null}
     */
    dequeue(): E | null;
    /**
     * @description Returns the element at the head of the queue
     * @return {E | null}
     */
    peek(): E | null;
}
