/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left=0,right=0,total=0;
    nums.forEach((i)=> total+=i);
    for(let i=0;i<nums.length;i++){
        left= total-nums[i]-right;
        if(left===right) return i;
        right+=nums[i];
    }return -1;
};