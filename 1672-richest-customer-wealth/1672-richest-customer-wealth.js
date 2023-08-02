/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max=0;
    for(let i=0;i<accounts.length;i++){
        let sum= accounts[i].reduce((x,y)=>x+y);
        if(max<sum)max=sum;
    }return max;
};