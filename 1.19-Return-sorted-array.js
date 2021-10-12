// sort method chages the order of the elements in the original array. 
// One way to avoid this is to first concatenate an empty array to the one being sorted
// (remember that slice and concat return a new array), the nrun the sort method.

// Practice:

// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
// The function should return a new array, and not mutate the globalArray variable.

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  return [].concat(arr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}
nonMutatingSort(globalArray);