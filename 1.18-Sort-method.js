// The sort method sorts the elements of an array according to the callback function
// It is encouraged to provide a callback function to specify how to sort the array items. 
// When compareFunction is supplied, the array elements are sorted according to the return value of the compareFunction.

// Practice

// Use the sort method in the alphabticalOrder function to sort the elements of arr in alphabetical order. THe function should return 
// the sorted array.

function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Add your code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);