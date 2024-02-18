class Stack {
    constructor() {
        this._items = []
    }
    push(item) {
        this._items.push(item)
    }
    pop() {
        this._items.pop()
    }
    peek() {
        // return this._items[this.items.length -1]
        return this._items.at(-1)
    }
}

const s = new Stack()

s.push(10)
s.push(20)
s.push(30)
s.push(40)
console.log(s.peek())