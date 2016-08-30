var Hamming = function() {}

Hamming.prototype.compute = function(strand_1, strand_2) {
  if (strand_1.length !== strand_2.length) {
    throw "DNA strands must be of equal length.";
  }

  return strand_1.split("").reduce(function(total, nt, idx) {
    return nt === strand_2[idx] ? total : total + 1;
  }, 0);
}

module.exports = Hamming;