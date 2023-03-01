function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function(x) {
    this.value += x;
  };
}

let accumulator = new Accumulator(2);

accumulator.read(3);
accumulator.read(4);

console.log(accumulator.value);

let user = {

};

console.log(user.address.street);