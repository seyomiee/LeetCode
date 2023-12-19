/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let count= new Map(),result=new Set();
    for(let num of arr){
        if(count.has(num)){
            count.set(num, (count.get(num)+1));
        }else{
            count.set(num,1);
        }
    }
    
    for (let num of count.values()) {
        if (result.has(num)) return false;
        result.add(num);
    }return true;
};

  