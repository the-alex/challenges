const compose = (...funcs) => (...args) =>
  funcs.reduceRight((acc, func) => func(acc), ...args);

const pipe = (...funcs) => (...args) =>
  funcs.reduce((acc, func) => func(acc), ...args)

var greet = function(name) {
  return 'hi: ' + name;
};
var exclaim = function(statement) {
  return statement.toUpperCase() + '!';
};

var welcome = compose(greet, exclaim);
console.log('hi: PHILLIP!');
console.log(welcome('phillip'));
console.log('hi: KIA!');
console.log(welcome('kia'));
