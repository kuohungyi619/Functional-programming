// Splice method mutates the original array it is called on. 

var cities = ['Chicago', 'Delhi', 'Islamabad', 'Londo', 'Berlin']
cities.splice(3,1)

// Slice doesn't mutitae the original array, but returns a new one which can be saved 
// in a variable

// Practice

// Rewrite the function, it should limit the provided cities array to a length of 3, and return a new array
// with only the first three items

function nonMutatingSplice(cities) {

    return cities.slice(0,3);
  }
  var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);