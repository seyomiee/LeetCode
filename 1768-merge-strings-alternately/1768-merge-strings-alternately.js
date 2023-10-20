/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
        let length= Math.max(word1.length, word2.length);
        let merged="";
        
        for(let i=0;i<length;i++){
            if(word1[i]!=undefined) merged+=word1[i];
            if(word2[i]!=undefined) merged+=word2[i];
        }return merged;
    }