const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  
  let getTurns = function(disksNumber, res){
    
    if(!res){
      res = 1;
    }
    
    let addDisk = function(){
      disksNumber--;
      res = (res * 2) + 1;
      return getTurns(disksNumber, res);
    };

    if(disksNumber > 1){
      return addDisk();
    } else {
      return res;
    }
  }

  let getSeconds = function(turns, turnsSpeed){
    return (turns * 60 * 60) / turnsSpeed;
  };

  let obj = {
    turns: getTurns(disksNumber),
    seconds: Math.floor(getSeconds(getTurns(disksNumber), turnsSpeed))
  };

  return obj;
};
