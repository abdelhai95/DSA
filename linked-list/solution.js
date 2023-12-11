class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        ;
        this.length++;
        return this;
    }


    pop() {
        if(! this.length) return -1;
        let temp = this.head;
        let popedElement;
        while(temp) {
            if(temp.next === this.tail) {
               const preLastElement = temp;
                popedElement = this.tail;
                preLastElement.next = null;
                this.tail = preLastElement;
            }
            temp = temp.next;
        }

        this.length--;
        return popedElement.val;
    }
}


let list = new SinglyLinkedList();

// Tests
list.push(5);
list.push(6);
list.push(7);
list.pop();