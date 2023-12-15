/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
   let highest=0,current=0;
    for(let i=0; i<gain.length; i++){

        current+=gain[i];
        if(current>=highest) highest=current;
    }return highest
    
 
};