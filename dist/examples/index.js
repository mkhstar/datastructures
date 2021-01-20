"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
// const myStack: Stack<number> = new Stack(10);
// myStack.push(1);
// myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);
// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.pop())
// myStack.push(14);
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())
var list = new index_1.LinkedList(1, 2, 3, 4, 5);
console.log(list.indexOf(2));
