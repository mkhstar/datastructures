import {LinkedList} from '../index';



const list = new LinkedList<number>();

list.add(1);
list.add(3);
list.add(8);
list.add(1);
list.add(2);
list.add(1);


list.removeElements(1);


console.log(...list)


console.log('size', list.size())