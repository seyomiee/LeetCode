/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start=0, end=nums.length-1;
    while(start<end){
         let mid= Math.floor((start + end) / 2);
         if(target==nums[mid]) return mid;
         if(target<nums[mid]) end=mid-1; 
         else start=mid+1;
    } if(target>nums[start]) return start+1;
        else return start;
};