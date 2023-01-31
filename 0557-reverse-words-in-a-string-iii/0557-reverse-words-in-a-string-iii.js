/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let n=s.split(' ').length,result=s.split(' ');

    for(let i=0;i<n;i++){
        result[i]=result[i].split('').reverse().join('');
    }return result.join(' ');
};