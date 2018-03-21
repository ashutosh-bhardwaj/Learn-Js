function Stack(list = []) {
    this.list = list;

    this.push = (i) => this.list.push(i);
    this.pop = () => this.list.pop();
}

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(4);
myStack.push(5);
myStack.pop();
myStack.pop();
