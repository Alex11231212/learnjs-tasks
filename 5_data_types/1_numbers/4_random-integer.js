function randomInteger(min, max) {
  let result = min + Math.random() * (max - min + 1);
  return Math.floor(result);
}


console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
