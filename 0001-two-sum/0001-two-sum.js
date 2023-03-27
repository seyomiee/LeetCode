/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let l=nums.length,i=0,result=0;
    while(i<l){
        i++;
        result=target-nums[i];
        nums[i]=0;
        if(nums.includes(result))return [i,nums.indexOf(result)];
    }
};