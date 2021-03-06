const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new RangeError('');

  let res = [];

  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case '--discard-next':
        i = i + 2;
        break;
      case '--discard-prev':
        res.pop();
        break;
      case '--double-next':
        if(i + 1 < arr.length)
          res.push(arr[i + 1]);
        break;
      case '--double-prev':
        if(i - 1 >= 0)
          res.push(arr[i - 1]);
        break;
      default:
        res.push(arr[i]);
        break;
    }
  }

  return res;
};