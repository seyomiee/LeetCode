/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result=[],num=0;
    for(let i of nums){
        num+=i;
        result.push(num);
    }return result;
};