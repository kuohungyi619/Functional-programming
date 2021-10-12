// For example

[1, 2, 3].concat([4, 5, 6]);
// The returned array would be [1, 2, 3, 4, 5, 6].

// Practice
function nonMutatingConcat(original, attach) {

    return original.concat(attach)
  
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingConcat(first, second);