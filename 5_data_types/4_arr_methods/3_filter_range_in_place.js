function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (item < a || item > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [0, 1, 5, 3, 8, 1];


console.log(filterRangeInPlace(arr, 2, 5));
console.log(arr);