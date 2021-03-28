const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    depth += 1;
    const newArr = [];
    let flatArr = false;
    arr.forEach((item) => {
      if(item instanceof Array){
        item.forEach((elem) => newArr.push(elem));
        if(item.length === 0) flatArr = true;
      }
    });
    if(newArr.length > 0 || flatArr){
      return this.calculateDepth(newArr, depth);
    }
    return depth;
    }
};