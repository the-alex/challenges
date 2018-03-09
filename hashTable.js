var makeHashTable = function() {
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  table.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    if (table.retrieve(key) === undefined) {
      storage[index].push([key, value]);
      table[key] = index;
    } else {
      let chain = storage[index];
      chain = chain.map(pair => (pair[0] === key ? [key, value] : pair));
      storage[index] = chain;
    }
  };

  table.retrieve = function(key) {
    let ind = table[key];
    if (ind === undefined) {
      return undefined;
    }
    let chain = storage[ind];
    for (const pair of chain) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  };

  table.removeFromChain = function(key, index) {
    let chain = storage[index];
    let newChain = [];
    for (const pair of chain) {
      if (pair[0] !== key) {
        newChain.push(pair);
      }
    }
    return chain;
  };

  table.remove = function(key) {
    let ind = table[key];
    delete table[key];
    // Check for value in collisions
    storage[ind] = table.removeFromChain(key, ind);
  };
  return table;
};

var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

let ht = makeHashTable();
var n = 1010;
for (var i = 0; i < n; i++) {
  ht.insert('userid:' + i, 'Jamie Hyneman #' + i);
}
for (var i = 0; i < n; i++) {
  let input = 'userid:' + i
  let output = ht.retrieve(input);
  let expected = 'Jamie Hyneman #' + i;
  if (output !== expected) {
    console.log('false');
    console.log(`${output} !== ${expected}`);
    console.log(input)
  }
}
