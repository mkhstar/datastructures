interface TestLinkedListElement<E> {
    (element: E): boolean;
}
export declare class LinkedList<E> {
    constructor(...initialItems: Array<E>);
    private length;
    private first;
    private last;
    private list;
    size(): number;
    getFirstElement(): E | null;
    getLastElement(): E | null;
    [Symbol.iterator](): Generator<E, void, unknown>;
    removeAt(index: number): boolean;
    removeElements(element: E): void;
    removeElementsWhere(test: TestLinkedListElement<E>): void;
    removeElement(element: E): boolean;
    removeElementWhere(test: TestLinkedListElement<E>): boolean;
    insertAt(index: number, element: E): boolean;
    add(...items: Array<E>): void;
    addFirst(item: E): void;
    addLast(item: E): void;
    clear(): void;
}
export {};
