/**
 * @param {string} s
 * @return {string}
 */

const isVowel= (s)=>{
    return s==='a' || s==='e'|| s==='i'|| s==='o'|| s==='u'||s==='A' || s==='E'|| s==='I'|| s==='O'|| s==='U';
}
var reverseVowels = function(s) {
    let left=0,right=s.length-1,swap;
    s=s.split('');
    while(left<right){
        if(isVowel(s[left]) && isVowel(s[right])){
            swap=s[left];
            s[left]=s[right];
            s[right]=swap;
            left++;
            right--;
        }if(!isVowel(s[left]))left++;
        if(!isVowel(s[right]))right--;
    }return s.join('');
};

