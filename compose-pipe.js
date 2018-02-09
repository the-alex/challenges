var compose = function(...funcs) {
  // Each function is called on the return value of the previous function
  return function (...args) {
    res = args[0];
    for (var i = funcs.length; i > 0; i--) {
      res = funcs[i - 1](res);
    }
    return res;
  }
};

var pipe = function(...funcs) {
  return function (...args) {
    res = args[0];
    for (const func of funcs) {
      res = func(res);
    }
    return res;
  }
};

var greet = function(name) {
  return 'hi: ' + name;
};
var exclaim = function(statement) {
  return statement.toUpperCase() + '!';
};

var welcome = compose(greet, exclaim);
console.log('hi: PHILLIP!')
console.log(welcome('phillip'))
console.log('hi: KIA!')
console.log(welcome('kia'));
