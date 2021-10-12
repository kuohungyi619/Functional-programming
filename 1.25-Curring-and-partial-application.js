// The arity of a function is the number of argumetns it requires. Currying a function
// means to convert a function of N arity into N functions of arity 1.
// For example: curried(1)(2) would return 3

// Practice:

// Fill in the body of the add function so it uses curring to add parameters x, y, and z

function add(x) {
    // Add your code below this line
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
    // Add your code above this line
  }
  add(10)(20)(30);