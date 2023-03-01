function checkSpam(str) {
  let newStr = str.toLowerCase();
  let result = ~newStr.indexOf('viagra') || ~newStr.indexOf('xxx');
  return result ? true : false;
}


console.log(checkSpam("hello"));
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));