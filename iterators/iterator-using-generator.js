function IterRange(start, end, step = 1) {
  if (!(this instanceof IterRange)) {
    console.warn('Please use "new" keyword to instantiate IterRange Object');
    return new IterRange(start, end, step);
  }

  this.start = start;
  this.end = end;
  this.step = step;

  let self = this;

  this[Symbol.iterator] = function* () {
    let currentValue = self.start;
    while (currentValue <= self.end) {
      yield currentValue;
      currentValue += self.step;
    }
  };
}

const range = new IterRange(3, 7);

for (let i of range) {
  console.log(i);
}