class Calculator {
  constructor() {
    this.currentState = 0;
  }
  getCurrentState() {
    return this.currentState;
  }
  setState(result) {
    this.currentState = result;
    return result;
  }
  clearCurrentStatus() {
    this.currentState = 0;
    return true;
  }
  addInputs(...numbers) {
    return this.setState(numbers.reduce((total, num) => total + num, 0));
  }
  multiplyInputs(...numbers) {
    return this.setState(numbers.reduce((total, num) => total * num, 1));
  }
  divideInputs(...numbers) {
    return this.setState(numbers.reduce((total, num) => total / num));
  }
  subtractInputs(...numbers) {
    return this.setState(numbers.reduce((total, num) => total - num));
  }
  toPower(a, b) {
    return this.setState(a ** b);
  }
  negPosReversal(num) {
    return this.setState(num * -1);
  }
}

module.exports = Calculator;
