/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max=0,result=new Map();
    for(let i=0;i <s.length; i++){
        if(result.has(s[i])){
            i=result.get(s[i]),i;
            result.clear();
        }else result.set(s[i],i); 
        if(max<result.size) max=result.size;      
    }return max;
};