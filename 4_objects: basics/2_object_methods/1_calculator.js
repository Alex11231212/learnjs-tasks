
let calculator = {

  read (a, b) {
    this.a = a;
    this.b = b;
    return this;
  },

  sum () {
    return this.a + this.b;
  },

  mul () {
    return this.a * this.b;
  }
};


console.log(calculator.read(1, 2).sum());
console.log(calculator.mul())