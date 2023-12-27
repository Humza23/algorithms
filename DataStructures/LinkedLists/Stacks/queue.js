class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }
    enqueue(val){
        let newNode = new Node(val)

        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.size++
        return this

    }
    dequeue(){
        if(!this.first) return null
        let poppedValue = this.first

        if(this.first == this.last){
            this.last = null
        }

        this.first = this.first.next
    
        this.size--
        return poppedValue
    }
}

let queue = new Queue()

queue.enqueue('1')
queue.enqueue('4')
queue.enqueue('6')
queue.dequeue()
console.log(queue);