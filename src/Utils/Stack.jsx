export class Stack{
    constructor() {  
    this.InputEvent = [];
    }

    push(item) {
        this.InputEvent.push(item);
    }

    pop() {
        if (this.InputEvent.length === 0) {
            return "Underflow";
        }
        return this.InputEvent.pop();
    }

    peek() {
        return this.InputEvent[this.InputEvent.length - 1];
    }

    isEmpty() {
        return this.InputEvent.length === 0;
    }

}