function Calculator() {

  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };
  this.addMethod = (operator, func) => this.methods[operator] = func;

  this.calculate = function(expression) {

    let separated_components = expression.split(' ');
    
    let a = +separated_components[0];
    let b = +separated_components[2];
    let operator = separated_components[1];

    return (operator in this.methods && !isNaN(a) && !isNaN(b)) ? this.methods[operator](a, b): NaN
  };
}

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate('1 * 2'));
console.log(powerCalc.calculate('1 + 2'));
console.log(powerCalc.calculate('2 ** 2'));
console.log(powerCalc.calculate('34 - 12'));