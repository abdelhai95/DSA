## Node 
- Elements in linked lists need to have a value and a pointer pointing to the following element in the list.
- The Node class will be used to create list components.

## SinglyLinkedList 
- This is the class that will contain all of the functions and is in charge of making linked lists.

## push() 
- Inserts a node to the end of the list.
- Check if the list is empty. 
- Make the *head* and *tail* points to the newely created node.
- If there are nodes update the tail *next*property to point to the new node and then make set the tail to be equal to the new node.
- Lines 23/24 will change the `head.next` property because they refer to the same object and by changing it through the tail head will be changed too.

## pop() 
- Removes a node from the end of the list.
- We traverse the list starting from the *head* to Find the last element to the *tail* I called it `preLastElement`.
- Set it's `next` property to be *null*.
- Set this element to be the tail.
- Decrement the length by one.
- Return the old tail I stored it in `popedElement`.
- `temp` used to traverse the list.