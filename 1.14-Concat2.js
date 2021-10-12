// Functional programming is all about creating and using non-mutating functions

var arr = [1, 2, 3]
arr.push([4, 5, 6])

// This will return [1, 2, 3, [4, 5, 6]]

// Practice

function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
  
    // Only change code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingPush(first, second);