class SmartCalculator {
  constructor(initialValue) {
    this.stack = [];
    this.stack.push(initialValue);
    this.value = 0;
  }

  add(number) {
    this.stack.push('+');
    this.stack.push(number);
    let s = this.stack.join('');
    this.value = eval(s);
    return this;
    //return this.result = this.result + number;
  }
  
  subtract(number) {
    this.stack.push('-');
    this.stack.push(number);
    let s = this.stack.join('');
    this.value = eval(s);
    return this;
  }

  multiply(number) {
    this.stack.push('*');
    this.stack.push(number);
    let s = this.stack.join('');
    this.value = eval(s);
    return this;
  }

  devide(number) {
    this.stack.push('/');
    this.stack.push(number);
    let s = this.stack.join('');
    this.value = eval(s);
    return this;
  }

  pow(number) {
    let p = Math.pow(this.stack.pop(), number);
    //this.stack.push('+');
    this.stack.push(p);
    let s = this.stack.join('');
    this.value = eval(s);
    return this;
  }

  valueOf() {
    return this.value;
  }
}

module.exports = SmartCalculator;
