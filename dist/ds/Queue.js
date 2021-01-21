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
        get: function () {
            return this.head === -1 && this.tail === -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "isFull", {
        get: function () {
            return this.head !== -1 && this.tail !== -1 && this.nextTailIndex === this.head;
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
    Queue.prototype.enqueue = function (element) {
        if (this.isEmpty)
            this.head = this.tail = 0;
        else if (this.nextTailIndex === this.head)
            throw new Error("Queue is full");
        else
            this.tail = this.nextTailIndex;
        this.list[this.tail] = element;
    };
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
    return Queue;
}());
exports.Queue = Queue;
