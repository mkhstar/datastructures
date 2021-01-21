"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(capacity) {
        if (capacity === void 0) { capacity = 255; }
        this.length = 0;
        this.list = new Array(capacity);
    }
    /**
     * @description Push an element to the stack
     * @param {E} element
     */
    Stack.prototype.push = function (element) {
        this.list[this.length++] = element;
    };
    /**
     * @description Is the stack empty?
     * @return {boolean}
     */
    Stack.prototype.isEmpty = function () {
        return !!this.length;
    };
    /**
   * @description Removes an element from the top of the stack and return it
   * @return {E | null} element
   */
    Stack.prototype.pop = function () {
        if (!this.length)
            return null;
        return this.list[--this.length];
    };
    /**
    * @description Returns the element at the top of the stack
    * @return {E | null} element
    */
    Stack.prototype.peek = function () {
        return this.length ? this.list[this.length - 1] : null;
    };
    return Stack;
}());
exports.Stack = Stack;
