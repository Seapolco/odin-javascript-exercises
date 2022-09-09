const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  let numbers = array;
  if(numbers.length === 0) {
    return 0 ;
  } 
  let sum = numbers.reduce((acc,curr) => {
    acc += curr;
    return acc
  })

  return sum
};

const multiply = function(numbers) {
  let sum = numbers.reduce((acc,curr) => {
    acc *= curr;
    return acc
  })

  return sum
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(number) {
  if(number === 0 || number === 1) {
    return 1
  }
  let numbersArray = [];

  for(let i = number; i > 0; i--) {
    numbersArray.push(i)
  }

  let sum = numbersArray.reduce((acc,curr) => {
    return acc *= curr
  })
	return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
