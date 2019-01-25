/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let cur = this.head;
  while (cur) {
    if (cur.val === val) {
      switch (cur) {
        case this.head:
          this.head = cur.next;
          if (this.head) this.head.prev = null;
          if (cur !== this.tail) break;
          
        case this.tail:
          this.tail = cur.prev;
          if (this.tail) this.tail.next = null;
          break;
        
        default:
          cur.prev.next = cur.next;
          cur.next.prev = cur.prev;
          break;
        }
      return cur;
    }
    cur = cur.next;
  }
};
// LinkedList.prototype.remove = function(val) {
//   let output;

//   if (this.head.val === val) { 
//     output = this.head;
//     this.head = this.head.next;
//     this.head.prev = null;
//     return output
//   }

//   let curr = this.head.next;
//   let prev = this.head;

//   while (curr !==null) {
//     if (curr.val === val) {
//       output = curr;

//       if (!curr.next) {
//         prev.next = null;
//         this.tail = prev;
//         output = curr;
//         return output;
//       }
      
//       prev.next = curr.next;
//       curr.next.prev = prev;
//       return output;
//     } else {
//       prev = curr;
//       curr = curr.next;
//     }
//   }
//   return output
  
// };

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3)

console.log(list)

module.exports = LinkedList;
