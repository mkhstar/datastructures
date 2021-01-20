export declare class Stack<E> {
    private length;
    private list;
    constructor(capacity?: number);
    push(element: E): void;
    isEmpty(): boolean;
    pop(): E | null;
    peek(): E | null;
}
