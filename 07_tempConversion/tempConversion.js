const ftoc = function(temp) {
  return Math.round(((temp - 32) * 0.5556) * 10) /10
};

const ctof = function(temp) {
  return Math.round(((temp * 1.8) + 32) * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

// This was too easy. I thought Math.round() might have had a parameter
// that let you round to one decimal space. Pretty silly in hindsight.
// The clue is in the name, but it made sense to my peanut math brain.
// The solution was so short that once I clicked on the first link
// the exercise had been spoilt. May have been able to work this one out
// after a heavy session of headbutting the keyboard but hey ho probably no
// with my monkey math brain. 
