class Node{
    constructor(val) {
        
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0

    }

    push(val){
        let node = new Node(val)

        if(!this.head){
            this.head = node
            this.tail = node
        } else{
            // let temp = this.tail
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
            // this.tail.prev = temp
        }
        this.length++
        return this.tail

    }
    pop(){
        if(!this.head) return undefined
        
        let oldTail = this.tail

        if(this.length == 1){
            this.head = null
            this.tail = null
        }else{
            
            this.tail = oldTail.prev
            
            this.tail.next = null

            oldTail.prev = null
            
        }

            this.length--
        return oldTail
    }
    shift(){
        if(!this.head) return undefined

        let oldHead = this.head

        if(this.length == 1){
            this.head = null
            this.tail = null
        }else{
            
            this.head = oldHead.next
            oldHead.next= null
            this.head.prev = null
        }

        this.length--
        return oldHead
    }
    unshift(val){
        let node = new Node(val)

        if(!this.head){
            this.head = node
            this.tail = this.head
        }else{
            this.head.prev = node
            node.next = this.head
            this.head = node


            // let oldHead = this.head
            // this.head = node
            // node.next = oldHead
            // oldHead.prev = this.head
        }
        this.length++
        return this.head
    }
    get(idx){
        if(idx < 0 || idx > this.length) return null

        if(idx == 0) return this.head
        // if(idx-1 == this.length) return this.tail

        if(idx < this.length / 2){
            let counter = 0
            let current = this.head
            while(counter != idx){
                counter += 1
                current = current.next            
        }
            return current

        }else{
            let counter = this.length-1
            let current = this.tail
            
            while(counter != idx){
                counter -= 1
                current = current.prev
            }

            return current
        }
    }  
    set(idx,val){

    let node = this.get(idx);
    if (node) {
        node.val = val;
        return true;
    }
    return false;
    }

    insert(idx,val){
        if(idx < 0 || idx > this.length) return null

        let newNode = new Node(val)
        let beforeNode = this.get(idx-1)
        let afterNode = beforeNode.next

        if(idx == 0 ){
            return this.unshift(val)
        }else if(idx == this.length){
            return this.push(val)
        } else{

            beforeNode.next = newNode
            newNode.prev = beforeNode

            newNode.next = afterNode
            afterNode.prev = beforeNode
        }
        this.length++
        return this
    }

    remove(idx){
        if(idx < 0 || idx > this.length) return null

        if(idx == 0) return this.shift()
        if(idx == this.length-1) return this.pop()

        let nodeToRemove = this.get(idx - 1)
        let beforeNode = nodeToRemove.prev
        let afterNode = nodeToRemove.next
        
        beforeNode.next = afterNode
        afterNode.prev = beforeNode

        nodeToRemove.next = null
        nodeToRemove.prev = null

        this.length--

        return this
    }
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node

        let next = null
        let prev = null
        
        while(node){
            next = node.next
            node.next = prev

            prev = node
            node = next
        }
        return this
    }
}

let list = new DoublyLinkedList()

list.push('1')
list.push('5')
list.push('3')
list.push('10')

console.log(list.remove(1))