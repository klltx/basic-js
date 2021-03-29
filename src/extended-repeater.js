const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatStr = [];
  const additionalStr = [];
  let newStr = str;

  if(options.addition){
    if(options.additionRepeatTimes){
      for(let i = 0; i < options.additionRepeatTimes; i++){
        repeatStr.push(options.addition);

        if(options.additionSeparator){
          newStr += repeatStr.join(options.additionSeparator);
        } else {
          newStr += repeatStr.join('|');
        }
      }
    } else {
      newStr += options.addition;
    }
  }

  if(options.repeatTimes){
    for(let i = 0; i < options.repeatTimes; i++){
      additionalStr.push(newStr);
    }
    
    if(options.separator){
      return additionalStr.join(options.separator);
    } else {
      return additionalStr.join('+');
    }
  } else {
    return newStr;
  }
};