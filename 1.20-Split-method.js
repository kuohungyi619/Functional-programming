// The split method splits a string into an array of strings.
// It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression

// Practice:

// Use the split method inside the splitify function to split str into an array of words.
// The function should return the array.

function splitify(str) {
    // Add your code below this line
    return str.split(/\W/);
    // Add your code above this line
  }
  splitify("Hello World,I-am code");