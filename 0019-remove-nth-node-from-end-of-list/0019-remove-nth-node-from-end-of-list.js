/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node=head,l=0;
    while(node){
        node=node.next;
        l++;
    }
    if(l==n)return head.next;
    let m=l-n-1;
    node=head;
    while(m){
        node=node.next;
        m--;
    }
    node.next=node.next.next;
    return head;
};