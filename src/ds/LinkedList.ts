interface TestLinkedListElement<E> {
  (element: E): boolean;
}

export class LinkedList<E> {
  constructor(...initialItems: Array<E>) {
    this.add(...initialItems);
  }

  private length: number = 0;
  private first: LinkedListNode<E> | null = null;
  private last: LinkedListNode<E> | null = null;
  private list: LinkedListNode<E> | null = null;

  public size(): number {
    return this.length;
  }

  getFirstElement() {
    return this.first?.getElement() || null;
  }

  getLastElement() {
    return this.last?.getElement() || null;
  }

  *[Symbol.iterator]() {
    let next = this.list;
    while (next) {
      yield next.getElement();
      next = next.getNext();
    }
  }


  indexOf(index: number): E | null {
    let currentIndex = 0;
    for (const element of this) {
      if (currentIndex === index) return element;
      currentIndex ++;
    }
    return null;
  }

  removeAt(index: number): boolean {
    if (index < 0 || index + 1 > this.length) return false;

    if (this.length === 1 && index === 0) {
      this.first = this.last = this.list = null;
      return true;
    }

    let next = this.list;
    let prev: LinkedListNode<E> | null = null;

    let currentIndex = 0;
    while (next) {
      if (index > 0 && index - 1 === currentIndex) prev = next;
      else if (currentIndex === index) {
        if (prev) {
          const result = prev.setNextNode(next.getNext());

          if (next === this.last) this.last = result;
        } else this.first = this.list = next.getNext();

        this.length--;
        return true;
      }

      next = next.getNext();
      currentIndex++;
    }

    return false;
  }

  removeElements(element: E): void {
    if (!this.length) return;

    let next = this.list;
    let prev: LinkedListNode<E> | null = null;

    while (next) {
      const nextElement = next.getElement();

      if (nextElement !== element) prev = next;
      else {
        if (prev) {
          const result = prev.setNextNode(next.getNext());

          if (next === this.last) this.last = result;
        } else this.first = this.list = next.getNext();

        this.length--;
      }

      next = next.getNext();
    }
  }

  removeElementsWhere(test: TestLinkedListElement<E>): void {
    if (!this.length) return;

    let next = this.list;
    let prev: LinkedListNode<E> | null = null;

    while (next) {
      const nextElement = next.getElement();

      if (!test(nextElement)) prev = next;
      else {
        if (prev) {
          const result = prev.setNextNode(next.getNext());

          if (next === this.last) this.last = result;
        } else this.first = this.list = next.getNext();

        this.length--;
      }

      next = next.getNext();
    }
  }

  removeElement(element: E): boolean {
    if (!this.length) return false;

    let next = this.list;
    let prev: LinkedListNode<E> | null = null;

    while (next) {
      const nextElement = next.getElement();

      if (nextElement !== element) prev = next;
      else {
        if (prev) {
          const result = prev.setNextNode(next.getNext());

          if (next === this.last) this.last = result;
        } else this.first = this.list = next.getNext();

        this.length--;
        return true;
      }

      next = next.getNext();
    }

    return false;
  }

  removeElementWhere(test: TestLinkedListElement<E>): boolean {
    if (!this.length) return false;

    let next = this.list;
    let prev: LinkedListNode<E> | null = null;

    while (next) {
      const nextElement = next.getElement();

      if (!test(nextElement)) prev = next;
      else {
        if (prev) {
          const result = prev.setNextNode(next.getNext());

          if (next === this.last) this.last = result;
        } else this.first = this.list = next.getNext();

        this.length--;
        return true;
      }

      next = next.getNext();
    }

    return false;
  }

  insertAt(index: number, element: E): boolean {
    if (index < 0 || index + 1 > this.length) return false;

    if (index === 0) {
      this.addFirst(element);
      return true;
    }

    if (index === this.length) {
      this.addLast(element);
      return true;
    }

    let next = this.list;
    let prev: LinkedListNode<E> | null = null;

    let currentIndex = 0;

    while (next) {
      if (index - 1 === currentIndex) prev = next;
      else if (currentIndex === index && prev) {
        const currentNode = new LinkedListNode<E>(element, next);

        prev.setNextNode(currentNode);
        this.length++;
        return true;
      }

      next = next.getNext();
      currentIndex++;
    }

    return false;
  }

  add(...items: Array<E>) {
    for (const item of items) {
      if (!this.last) {
        this.first = this.last = this.list = new LinkedListNode(item);
      } else {
        this.last = this.last.setNext(item);
      }
      this.length++;
    }
  }

  addFirst(item: E) {
    if (!this.list) {
      this.first = this.last = this.list = new LinkedListNode(item);
    } else this.list = this.first = new LinkedListNode(item, this.list);
    this.length++;
  }

  addLast(item: E) {
    if (!this.last) {
      this.first = this.last = this.list = new LinkedListNode(item);
    } else this.last = this.last.setNext(item);
    this.length++;
  }

  clear() {
    this.first = this.last = this.list = null;
    this.length = 0;
  }
}

class LinkedListNode<E> {
  constructor(
    private element: E,
    private next: LinkedListNode<E> | null = null
  ) {}

  getElement(): E {
    return this.element;
  }

  getNext(): LinkedListNode<E> | null {
    return this.next;
  }

  setElement(element: E) {
    this.element = element;
  }

  setNext(element: E): LinkedListNode<E> {
    this.next = new LinkedListNode<E>(element);
    return this.next;
  }

  setNextNode(node: LinkedListNode<E> | null) {
    this.next = node;
    return this.next;
  }
}
