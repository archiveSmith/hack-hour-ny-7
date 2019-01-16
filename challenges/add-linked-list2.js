//* Input: 
//(2 -> 1 -> 5) + 
//(4 -> 9 -> 2)
//* Output: 6 -> 0 -> 8

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let cur = new Node(null);
  let sum = 0;
  while (l1 || l2 || sum) {
    sum += l1.value;
    l1 = l1.next;
    sum += l2.value;
    l2 = l2.next;
    if (sum >= 10) {
      cur.value = (sum % 10);
      sum = 1
    } else {
      cur.value = sum;
      sum = 0;
    }
    cur = cur.next;
  }
  return cur;
}
