/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let n=0;
    for(let i=low;low<high+1;low++){
        if(low%2!==0) n++;
    }return n;
};