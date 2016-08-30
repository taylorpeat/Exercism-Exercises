var Gigasecond = function(date) {
  this.original_date = date;
  this.date = function() {
    return new Date(this.original_date.getTime() + 1000000000000);
  }
}

module.exports = Gigasecond;