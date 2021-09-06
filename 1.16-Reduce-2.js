// The function should return a new array containing the squares of only the positive 
// integers (decimal numbers are not integers) when an array of real numbers is passed
// to it.

// Practice
const squareList = (arr) => {
    // Only change code below this line
    return arr
            .filter(num => num > 0 && num % parseInt(num) === 0)
            .map(num => Math.pow(num, 2));
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);