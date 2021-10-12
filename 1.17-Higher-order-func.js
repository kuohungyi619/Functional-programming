// Apply map(), filter() and reduce() to solve a more complex challenge

// Practice
// Complete the code for the squareList function using any combination of map(), filter() and reduce().
// The function should return a new array containing the squares of only positive integers.

const squareList = (arr) => {
    // Only change code below this line
    return arr
            .filter(num => num > 0 && num % parseInt(num) === 0)
            .map(num => Math.pow(num, 2));
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);