const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members === undefined || members === null) return false;

  let res = [];
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] === 'string') res.push(members[i].trim()[0].toUpperCase());
  }

  return res.sort().join('');
};
