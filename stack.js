// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

//We start with an empty 1st node, represented by null and this indicates the top of the stack.

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

const emptyStack = new Stack()
const starTrek = new Stack()
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
// console.log(starTrek.top.next)

// display(): to display the stack - what is the 1st item in your stack ?
//     Remove McCoy from your stack and display the stack

function peek(stack) {
    return stack.top.data
}
// console.log(peek(starTrek))

function isEmpty(stack) {
    return (stack.top === null) ? true : false
}
// console.log(isEmpty(starTrek))
// console.log(isEmpty(emptyStack))

function display(stack) {
    const arr = []
    while (stack.top !== null) {
        arr.unshift(stack.top.data)
        stack.top = stack.top.next
    }
    return arr
}
// console.log(display(starTrek))

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const forward = new Stack()
    const backward = new Stack()

    const arr = s.split('')
    const arrReverse = s.split('').reverse()

    for (let i = 0; i < arr.length; i++) {
        forward.push(arr[i])
    }
    for (let i = 0; i < arrReverse.length; i++) {
        backward.push(arrReverse[i])
    }
    //forward.top === null empty stack
    while (forward.top !== null) {
        if (forward.top.data !== backward.top.data) {
            return false
        }
        forward.top = forward.top.next
        backward.top = backward.top.next
    }
    return true
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
