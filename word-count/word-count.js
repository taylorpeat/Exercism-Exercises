var Words = function() {}

Words.prototype.count = function(words) {
  word_count = {};
  words.trim().toLowerCase().split(/\s+/).forEach(function(word) {
    if (typeof word_count[word] === 'number') {
      word_count[word]++;
    } else {
      word_count[word] = 1;
    }
  });
  return word_count;
}

module.exports = Words;