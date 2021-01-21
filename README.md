# datastructuresjs

> Popular data structures implemented in Typescript (Javascript)

[![NPM](https://img.shields.io/npm/v/datastructuresjs.svg)](https://www.npmjs.com/package/datastructuresjs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

#### npm

```sh
$ npm install --save datastructuresjs
```


# Linked List

## Constructors

### constructor

\+ **new LinkedList**<E\>(...`initialItems`: E[]): [*LinkedList*](linkedlist.linkedlist-1.md)<E\>

`description:` Constructs a new linked list

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *Generator*<E, *void*, *unknown*\>

**Returns:** *Generator*<E, *void*, *unknown*\>



___

### add

▸ **add**(...`items`: E[]): *void*

**`description`** appends the elements at the tail (end) of the linked list

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`...items` | E[] |     |

**Returns:** *void*



___

### addFirst

▸ **addFirst**(`item`: E): *void*

**`description`** Adds an element to the linked list at the head

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | E |     |

**Returns:** *void*



___

### addLast

▸ **addLast**(`item`: E): *void*

**`description`** Adds an element to the tail of the linked list

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | E |     |

**Returns:** *void*



___

### clear

▸ **clear**(): *void*

**`description`** Clears the linked list

**Returns:** *void*



___

### getFirstElement

▸ **getFirstElement**(): *null* \| E

**Returns:** *null* \| E

The first element of the linked list



___

### getLastElement

▸ **getLastElement**(): *null* \| E

**Returns:** *null* \| E

The last element of the linked list



___

### indexOf

▸ **indexOf**(`index`: *number*): *null* \| E

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`index` | *number* | The index to look up   |

**Returns:** *null* \| E



___

### insertAt

▸ **insertAt**(`index`: *number*, `element`: E): *boolean*

**`description`** inserts an element at the specified index

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`index` | *number* |  |
`element` | E |     |

**Returns:** *boolean*



___

### removeAt

▸ **removeAt**(`index`: *number*): *boolean*

**`description`** Removes an element at the specified index, returns true if an element was removed and false otherwise

#### Parameters:

Name | Type |
------ | ------ |
`index` | *number* |

**Returns:** *boolean*

boolean



___

### removeElement

▸ **removeElement**(`element`: E): *boolean*

**`description`** Removes an element that is equal to the element specified

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`element` | E |     |

**Returns:** *boolean*



___

### removeElementWhere

▸ **removeElementWhere**(`test`: *TestLinkedListElement*<E\>): *boolean*

**`description`** Remove an element that satisfy the test function

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`test` | *TestLinkedListElement*<E\> |     |

**Returns:** *boolean*



___

### removeElements

▸ **removeElements**(`element`: E): *void*

**`description`** Removes all elements that are equal to the element specified

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`element` | E | The element to look up    |

**Returns:** *void*



___

### removeElementsWhere

▸ **removeElementsWhere**(`test`: *TestLinkedListElement*<E\>): *void*

**`description`** Removes all elements that satisfy the test function

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`test` | *TestLinkedListElement*<E\> |     |

**Returns:** *void*



___

### size

▸ **size**(): *number*

**Returns:** *number*

The size of the linked list



# Stack 

## Constructors

### constructor

\+ **new Stack**<E\>(`capacity?`: *number*): [*Stack*](stack.stack-1.md)<E\>



## Methods

### isEmpty

▸ **isEmpty**(): *boolean*

**`description`** Is the stack empty?

**Returns:** *boolean*



___

### peek

▸ **peek**(): *null* \| E

**`description`** Returns the element at the top of the stack

**Returns:** *null* \| E




___

### pop

▸ **pop**(): *null* \| E

**`description`** Removes an element from the top of the stack and return it

**Returns:** *null* \| E



___

### push

▸ **push**(`element`: E): *void*

**`description`** Push an element to the stack

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`element` | E |     |

**Returns:** *void*


Queue

## Constructors
### constructor

\+ **new Queue**<E\>(`capacity?`: *number*): [*Queue*](queue.queue-1.md)<E\>

`description` Default capacity is 50. If you try to add more than the capacity of the queue, an error will be thrown

## Getters

### isEmpty

• **isEmpty**(): *boolean*

**`description`** Is the Queue empty

**Returns:** *boolean*


___

### isFull

• **isFull**(): *boolean*

**`description`** Is the Queue full

**Returns:** *boolean*



## Methods

### dequeue

▸ **dequeue**(): *null* \| E

**`description`** Remove an element from the queue and return it

**Returns:** *null* \| E


___

### enqueue

▸ **enqueue**(`element`: E): *void*

**`description`** Add an element to the queue

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`element` | E |     |

**Returns:** *void*


___

### peek

▸ **peek**(): *null* \| E

**`description`** Returns the element at the head of the queue

**Returns:** *null* \| E





## Tests

Tests will be written soon. But pull requests will be appreciated
