import {Queue} from '../index';


const queue = new Queue<number>(4);


queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue())
console.log(queue.dequeue())

queue.enqueue(7);
queue.enqueue(7);

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())


console.log(queue.isFull)
console.log(queue.isEmpty)