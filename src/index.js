class SmartCalculator {
  constructor(initialValue) {
    this.stack = [];
    this.stack.push(initialValue);
    this.result = initialValue;
  }

  add(number) {
    this.stack.push('+');
    this.stack.push(number);
    let s = this.stack.join('');
    return eval(s);
    //return this.result = this.result + number;
  }
  
  subtract(number) {
    this.stack.push('-');
    this.stack.push(number);
    let s = this.stack.join('');
    return eval(s);
  }

  multiply(number) {
    this.stack.push('*');
    this.stack.push(number);
    let s = this.stack.join('');
    return eval(s);
  }

  devide(number) {
    this.stack.push('/');
    this.stack.push(number);
    let s = this.stack.join('');
    return eval(s);
  }

  pow(number) {
    let p = Math.pow(this.stack.pop(), number);
    this.stack.push('+');
    this.stack.push(p);
    let s = this.stack.join('');
    return eval(s);
  }
}

module.exports = SmartCalculator;
