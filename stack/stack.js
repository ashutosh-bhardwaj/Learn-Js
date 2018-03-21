function Stack(arr = []) {
    list = arr;

    this.push = (i) => list.push(i);
    this.pop = () => list.pop();
}

const myStack = new Stack();

myStack.push('a');
myStack.push('b');
myStack.pop();
myStack.push(5);
myStack.push('c');
myStack.pop();
