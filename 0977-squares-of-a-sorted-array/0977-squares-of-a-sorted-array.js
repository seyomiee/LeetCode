/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let start=0,end=nums.length-1;
  let i=end,result=[];
  while(start<=end){
      if(Math.abs(nums[start])<=Math.abs(nums[end])){
        result[i]=nums[end]*nums[end];
        end--;
        }else{
        result[i]=nums[start]*nums[start];
        start++;
        }i--;
  }return result;
};