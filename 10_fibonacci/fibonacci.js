const fibonacci = function(number) {
  if(number < 0) {
    return 'OOPS'
  }

  let firstIndex = 0;
  let secondIndex = 1;
  let fibonacci = [firstIndex,secondIndex]
  
  for(let i = 0; i < +number; i++) {
  fibonacci.push(fibonacci[firstIndex] + fibonacci[secondIndex])
  firstIndex++
  secondIndex++
	}
  return fibonacci[+number]
};

// Do not edit below this line
module.exports = fibonacci;
