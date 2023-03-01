let isEmpty = (obj) => {
  let n = 0;
  for (let i in obj) {
    n++
  }
  return n == 0;
};

let schedule = {};

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));