var DnaTranscriber = function () {
  this.complements = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };
  this.toRna = function(strand) {
    return strand.split("").map(function(nt) {
      return this.complements[nt];
    }, this).join("");
  }
}

module.exports = DnaTranscriber;

