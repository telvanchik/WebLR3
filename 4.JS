function Palindrome(str) 
{
    var strReverse = str.split('').reverse().join('');
    if (strReverse == str) 
        return true;
    else 
        return false;
}

console.log(Palindrome('racecar'));
console.log(Palindrome('table'));
console.log(Palindrome('tkchaao'));
console.log(Palindrome('d a d'));
console.log(Palindrome('d ad'));
console.log(Palindrome('d,a,d'));