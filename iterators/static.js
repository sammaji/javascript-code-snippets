let range = {
  start: 3,
  end: 7,
};

range[Symbol.iterator] = function () {
  return {
    start: this.start,
    end: this.end,
    next() {
      if (this.start <= this.end) {
        return { done: false, value: this.start++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let i of range) {
  console.log(i);
}
