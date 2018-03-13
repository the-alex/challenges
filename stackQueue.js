var Stack = function() {
  var storage = [];

  this.push = function(val) {
    storage.push(val);
    return val;
  };

  this.pop = function() {
    return storage.pop();
  };

  this.size = function() {
    return storage.length;
  };
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val) {
    inbox.push(val)
  };

  this.dequeue = function() {
    if (outbox.size() === 0) {
      let val;
      while (val = inbox.pop()) {
        outbox.push(val)
      }
    }
    return outbox.pop();
  };

  this.size = function() {
    return inbox.size() + outbox.size();
  };
};

