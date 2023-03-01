function ucFirst(str) {
  let newStr = str.at(0).toUpperCase() + str.slice(1);
  return newStr;
}


console.log(ucFirst("hello"));