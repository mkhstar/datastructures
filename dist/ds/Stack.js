"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(capacity) {
        if (capacity === void 0) { capacity = 255; }
        this.length = 0;
        this.list = new Array(capacity);
    }
    Stack.prototype.push = function (element) {
        this.list[this.length++] = element;
    };
    Stack.prototype.isEmpty = function () {
        return !!this.length;
    };
    Stack.prototype.pop = function () {
        if (!this.length)
            return null;
        return this.list[--this.length];
    };
    Stack.prototype.peek = function () {
        return this.length ? this.list[this.length - 1] : null;
    };
    return Stack;
}());
exports.Stack = Stack;
