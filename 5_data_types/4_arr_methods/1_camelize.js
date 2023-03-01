function camelize(str) {
  let allWordsArr = str.split('-');

  for (let i = 1; i <= allWordsArr.length - 1; i++) {
    let word = allWordsArr.at(i);
    allWordsArr[i] = word[0].toUpperCase() + word.slice(1);
  }
  return allWordsArr.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));