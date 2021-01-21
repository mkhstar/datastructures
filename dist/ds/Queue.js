"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(capacity) {
        if (capacity === void 0) { capacity = 50; }
        this.head = -1;
        this.tail = -1;
        this.list = new Array(capacity);
    }
    Object.defineProperty(Queue.prototype, "isEmpty", {
        /**
         * @description Is the Queue empty
         * @return {boolean}
         */
        get: function () {
            return this.head === -1 && this.tail === -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "isFull", {
        /**
         * @description Is the Queue full
         * @return {boolean}
         */
        get: function () {
            return (this.head !== -1 && this.tail !== -1 && this.nextTailIndex === this.head);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "nextTailIndex", {
        get: function () {
            if (this.isEmpty)
                return -1;
            return (this.tail + 1) % this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "nextHeadIndex", {
        get: function () {
            if (this.isEmpty)
                return -1;
            return (this.head + 1) % this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @description Add an element to the queue
     * @param {E} element
     */
    Queue.prototype.enqueue = function (element) {
        if (this.isEmpty)
            this.head = this.tail = 0;
        else if (this.nextTailIndex === this.head)
            throw new Error("Queue is full");
        else
            this.tail = this.nextTailIndex;
        this.list[this.tail] = element;
    };
    /**
     * @description Remove an element from the queue and return it
     * @return {E | null}
     */
    Queue.prototype.dequeue = function () {
        if (this.isEmpty)
            return null;
        else if (this.head === this.tail) {
            var result_1 = this.list[this.head];
            this.head = this.tail = -1;
            return result_1;
        }
        var result = this.list[this.head];
        this.head = this.nextHeadIndex;
        return result;
    };
    /**
     * @description Returns the element at the head of the queue
     * @return {E | null}
     */
    Queue.prototype.peek = function () {
        if (this.isEmpty)
            return null;
        return this.list[this.head];
    };
    return Queue;
}());
exports.Queue = Queue;
