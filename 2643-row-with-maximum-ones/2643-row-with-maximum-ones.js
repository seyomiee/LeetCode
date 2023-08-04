/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let row=0,count=0;
    for(let i=0;i<mat.length;i++){
        let numCount=0;
        for(let j=0;j<mat[0].length;j++){
            if(mat[i][j]===1) numCount++;           
        }if(numCount>count){
            row=i;
            count=numCount;
        }
    }return [row,count];
};
