function FindVowels(str) 
{
  let kol = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for (let s of str.toLowerCase())
    if (vowels.includes(s))
      kol++
  return kol
}

console.log(FindVowels('hello'));
console.log(FindVowels('why'));
console.log(FindVowels('aofoofoeeef'));