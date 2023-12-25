class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++

        return this

    }
    pop(){
        if(!this.head){
            return undefined
        }
        let current = this.head
        let newTail = current

        while(current.next){
            newTail = current
            current = current.next

        }
        this.tail.next = null
        this.tail = newTail
        this.length--

        return current
    }
    shift(){
        if(!this.head) return undefined
        
        let tempHead = this.head
        this.head = this.head.next

        
        this.length--

        return tempHead
    }
    unshift(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this

    }
    get(idx){
        if(idx < 0 || idx >= this.length ) return null

        let counter = 0
        let current = this.head

        while(counter !== idx){
            current = current.next 
            counter++
        }
        return current

    }
    set(val ,idx){
       let foundNode = this.get(idx)

       if(foundNode){
        foundNode.val = val
        return true;
       }
       return false

    }
    insert(idx, val){
        if(idx < 0 || idx > this.length) return false
        
        if(idx.length == this.length) return this.push(val)
        
        if (idx.length == 0) return this.unshift(val)
        
        let newNode = new Node(val)
        let prevNode = this.get(idx-1)

        let temp = prevNode.next
        prevNode.next = newNode
        newNode.next = temp

        this.length++
        return true
    }   
    remove(idx){
        if(idx < 0 || idx > this.length) return false

        if(idx == this.length) return this.pop()
        if(idx == 0) return this.shift()    

        let prevNode = this.get(idx-1)
        let removed = prevNode.next
        
        prevNode.next = removed.next

        this.length--

        return removed


    }
    reverse(){
        // 1 --> 2 --> 3 --> 4
        // 4 --> 3 --> 2 --> 1  -> null               
        // 
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
let list = new SinglyLinkedList();

list.push('1')
list.push('2')
list.push('4')

// console.log(list.push("Hello"))

// console.log(list.push("Hello"))
console.log('reversey',list.reverse())