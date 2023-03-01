'use strict';

let n = 10;
let res ='2, ';

for (let i = 2; i <= n; i ++) {
  for (let j = 2; j < i; j ++) {
    if (i % j == 0) {
      break;
    }
    if (i - j  == 1) {
      res += `${i}, `;
    }
  }
}
console.log(res);