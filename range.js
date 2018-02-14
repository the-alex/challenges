var Range = function(start, end, step = 1) {
  if (start === undefined) {
    return null;
  }

  this.start = start;
  this.end = end === undefined ? this.start : end;
  this.step = step;
  if ((this.end < this.start) && this.step > 0) {
    this.step = -this.step;
  }
};

Range.prototype.size = function() {
  return Math.floor(Math.abs(this.end - this.start) / Math.abs(this.step)) + 1;
};

Range.prototype.each = function(callback) {
  for (let i = 0; i < this.size(); i++) {
    let val = this.start + (i * this.step);
    callback(val);
  }
};

Range.prototype.includes = function(val) {
  for (let i = 0; i < this.size(); i++) {
    let cur = this.start + (i * this.step);
    if (cur === val) {
      return true;
    }
  }
  return false;
};

var countdown = new Range(10, 0);
countdown.each(item => console.log(item));
var elements = [];
countdown.each(function(val) {
elements.push(val);
});
console.log(elements);
var justOne = new Range(1);
console.log(justOne.includes(1) === true);
console.log(justOne.includes(50) === false);

var threes = new Range(3, 100, 3);
console.log(threes.includes(3) === true);
console.log(threes.includes(4) === false);
console.log(threes.includes(33) === true);
console.log(threes.includes(99) === true);
