/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let nums= new Set();
    while(n!==1){
        let current=n,sum=0;
        while(current!==0){
            sum+= (current%10)*(current%10);
            current= parseInt(current/10);
        }if(nums.has(sum)){ return false;}
        
        nums.add(sum);
        n=sum;
        }return true;
};