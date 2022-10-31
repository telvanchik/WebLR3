function checkSpam(str) 
{
  var LowerStr = str.toLowerCase();
  return LowerStr.includes('viagra') || LowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));