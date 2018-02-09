// @format
bind = (fn, context, ...a1) => (...a2) => fn.call(context, ...a1, ...a2);

Function.prototype.bind = function(context, ...a1) {
  return (...a2) => this.call(context, ...a1, ...a2);
};
var alice = {
  name: 'alice',
  shout: function() {
    console.log('here comes' + ' ' + this.name);
  },
};

alice.shout(); //=> 'here comes alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); //=> 'here comes bob'

alex = {
  name: 'alex',
  shout: function() {
    console.log(this.name);
  },
};

boundShout = alex.shout.bind(alex);
boundShout(); // 'alex'

boundShout = alex.shout.bind({name: 'bob'});
boundShout(); // 'bob'
