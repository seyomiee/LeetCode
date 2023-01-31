/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let ch,j=s.length-1;
    for(let i=0;i<s.length/2;i++){
        c=s[i];
        s[i]=s[j];
        s[j]=c;
        j--;
    }
};