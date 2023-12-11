class Node:
    def __init__(self,val):
        self.val = val
        self.next = None


class Singly_linked_list:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0



    def push(self,val):
        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = newNode
        else :
            self.tail.next = newNode
            self.tail = newNode

        self.length+= 1;
        return self        

    def pop(self):
        if not self.head:
            return -1
        temp = self.head
        popedElement = None
        while(temp):
            if(temp.next == self.tail):
                pre_last_element = temp
                poped_element = self.tail
                pre_last_element.next = None
                self.tail = pre_last_element

            temp = temp.next

        self.length-= 1
        return poped_element.val



# Tests
list = Singly_linked_list()
list.push(1).push(2).push(3)
list.pop