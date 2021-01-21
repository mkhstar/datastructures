interface TestLinkedListElement<E> {
    (element: E): boolean;
}
export declare class LinkedList<E> {
    /**
     * Constructs a new linked list
     * @constructor
     * @param {Array<E>} initialItems - The initial items in the linked list
     */
    constructor(...initialItems: Array<E>);
    private length;
    private first;
    private last;
    private list;
    /**
     * @return {number} The size of the linked list
     */
    size(): number;
    /**
     * @return {E | null} The first element of the linked list
     */
    getFirstElement(): E | null;
    /**
     * @return {E | null} The last element of the linked list
     */
    getLastElement(): E | null;
    [Symbol.iterator](): Generator<E, void, unknown>;
    /**
     *
     * @param {number} index The index to look up
     * @return {E | null}
     */
    indexOf(index: number): E | null;
    /**
     *  @description Removes an element at the specified index, returns true if an element was removed and false otherwise
     * @param {number} removeAt The index of the element to remove
     * @return boolean
     */
    removeAt(index: number): boolean;
    /**
     * @description Removes all elements that are equal to the element specified
     * @param {E} element The element to look up
     */
    removeElements(element: E): void;
    /**
     * @description Removes all elements that satisfy the test function
     * @param {TestLinkedListElement} test
     */
    removeElementsWhere(test: TestLinkedListElement<E>): void;
    /**
     * @description Removes an element that is equal to the element specified
     * @param {E} element
     */
    removeElement(element: E): boolean;
    /**
     * @description Remove an element that satisfy the test function
     * @param {TestLinkedListElement} test
     */
    removeElementWhere(test: TestLinkedListElement<E>): boolean;
    /**
     * @description inserts an element at the specified index
     * @param {number} index
     * @param {E} element
     */
    insertAt(index: number, element: E): boolean;
    /**
     * @description appends the elements at the tail (end) of the linked list
     * @param {Array<E>} items
     */
    add(...items: Array<E>): void;
    /**
     * @description Adds an element to the linked list at the head
     * @param {E} item
     */
    addFirst(item: E): void;
    /**
     * @description Adds an element to the tail of the linked list
     * @param {E} item
     */
    addLast(item: E): void;
    /**
     * @description Clears the linked list
     */
    clear(): void;
}
export {};
