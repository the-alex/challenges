// @format
function editDistance(str1, str2) {
  var longStr, shortStr;
  if (str1.length > str2.length) {
    longStr = str1;
    shortStr = str2;
  } else {
    longStr = str2;
    shortStr = str1;
  }
  var baseStr = [];
  // for each letter of the short string,
  for (var i = 0; i < shortStr.length; i++) {
    var letterInd = longStr.indexOf(shortStr[i]);
    if (letterInd !== -1) {
      var trackingInd = i;
      for (var j = letterInd; j < longStr.length; j++) {
        if (shortStr[trackingInd] === longStr[j]) {
          baseStr.push(shortStr[trackingInd]);
          trackingInd++;
        }
      }
    }
  }
}

// Difference in length + character changes required
/*
 * wednesday
 * sunday
 * +--+++
 * sday
 * _____sday
 * wednesday
 *
 * Find the shortest shared ordering
 *  ex: s.*day
 * Result is difference in string length 
 *
*/

t1 = ['cat', 'hat'];
t2 = ['wednesday', 'sunday'];
t3 = ['hackerrank', 'hackreactor'];
console.log(editDistance(...t1));
console.log(editDistance(...t2));
console.log(editDistance(...t3));
