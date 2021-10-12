// Use the some Method to check that any elements in an array meet a criteria.
// The some method works with arrays to check if any element passes a particular test. 
// It returns true if any of the values meet the criteria, false if not.

// Practice:

// Use the some method inside the checkPositive function to check if any element in arr is positive.
// The function should return a Boolean value.
function checkPositive(arr) {
    return arr.some(elem => elem > 0);
  }
  checkPositive([1, 2, 3, -4, 5]);
