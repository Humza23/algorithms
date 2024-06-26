class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val)

        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        this.size++
        return this.size
    }
    pop(){
        if(!this.head) return undefined

        let poppedNode = this.first

        if(this.first == this.last){
            this.last = null
        }

        this.first = this.first.next

        this.size--
        return poppedNode

    }
}

let stack = new Stack()
stack.push('1')
stack.push('3')
stack.push('5')

console.log(stack.pop())
console.log(stack);