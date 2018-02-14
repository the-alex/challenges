LEFT = '{[(';
RIGHT = '}])';
PAIRS = {
  '{': '}',
  '(': ')',
  '[': ']',
};

/*
 * While str is non-empty, shift off brackets.
 *    If the bracket is a closed one, pop the last shifted bracket.
 *        If the two are not equal, return false.
 *    else, the bracket is an open bracket. Add to stack.
 * return whether the stack of open brackets is empty or not.
 */

function isBalanced(str) {
  str = str.split('');
  str = str.filter(c => (LEFT + RIGHT).includes(c));
  let stack = [];
  while (str.length !== 0) {
    let next = str.shift();
    if (RIGHT.includes(next)) {
      let last = stack.pop();
      if (PAIRS[last] !== next) {
        return false;
      }
    } else {
      stack.push(next);
    }
  }
  return stack.length === 0;
}

tests = ['(x + y) - (4)', '(((10 ) ()) ((?)(:)))', '[{]}', '{'];

for (test of tests) {
  console.log(isBalanced(test));
}
