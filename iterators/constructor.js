function IterRange(start, end, step = 1) {
  if (!new.target) {
    console.warn("Please use \"new\" keyword to instantiate IterRange Object")
    return new IterRange(start, end, step);
  }

  this.start = start - step;
  this.end = end;
  this.step = step;

  this[Symbol.iterator] = function () {
    const self = this;
    return {
      next: function () {
        self.start += self.step;
        if (self.start <= self.end) {
          return {
            done: false,
            value: self.start,
          };
        }
        return { done: true };
      },
    };
  };
}

const range = new IterRange(0, 16, 4);

for (let i of range) {
  console.log(i);
}
