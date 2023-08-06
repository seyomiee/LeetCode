/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let result=[],index=0;
    if(m*n!==original.length)return [];
    
    for(let i=0;i<original.length;i++){
        if(result[index]){
            result[index].push(original[i]);
        }else{
            result[index]= [original[i]];
        }if((i+1)%n===0)index++;
    }return result;
};