/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let len=0, node=head;
    while(node!==null){
        len++;
        node=node.next;
    }len=Math.floor(len/2);
    while(len>0){
        head=head.next;
        len--;
    }return head;
};