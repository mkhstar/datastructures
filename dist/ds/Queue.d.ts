export declare class Queue<E> {
    private head;
    private tail;
    private list;
    constructor(capacity?: number);
    get isEmpty(): boolean;
    get isFull(): boolean;
    private get nextTailIndex();
    private get nextHeadIndex();
    enqueue(element: E): void;
    dequeue(): E | null;
}
