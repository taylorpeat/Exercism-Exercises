var Bob = function() {};

Bob.prototype.hey = function(input) {
  if ( input.toUpperCase() === input &&
       input.toLowerCase() !== input ) {
    return "Whoa, chill out!";
  } else if (input.endsWith("?")) {
    return "Sure.";
  } else if (!/\S/.test(input)) {
    return "Fine. Be that way!";
  } else {
    return "Whatever.";
  }
};

module.exports = Bob;
