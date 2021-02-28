const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date == null) {
    return 'Unable to determine the time of year!';
  } else if(date instanceof Date && !isNaN(date)){
    let currentMonth = date.getMonth() + 1;
    if(currentMonth > 2 && currentMonth < 6) return 'spring';
    else if(currentMonth > 5 && currentMonth < 9) return 'summer';
    else if(currentMonth > 8 && currentMonth < 12) return 'autumn';
    else return 'winter';
  } else {
    throw new RangeError('');
  }
};
