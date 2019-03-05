module.exports = function check(str, bracketsConfig) {

  var string = str.split('');
  var stek = [];

  if( string.length % 2!== 0) {
    return false;
  }

  for (var i = 0; i < string.length; i++) {

    for(var j = 0; j < bracketsConfig.length; j++ ) {

      if(string[i] === bracketsConfig[j][0] && string[i] !== bracketsConfig[j][1]) {
        stek.push(string[i]);
        break;
      }

      if(string[i] === bracketsConfig[j][0] && string[i] === bracketsConfig[j][1]) {
        if(stek[stek.length - 1] !== string[i] || stek.length === 0) {
          stek.push(string[i]);
          break;
        }
      }

      if(string[i] === bracketsConfig[j][1]) {
        if(stek.length === 0) {
          return false;
        } 
        var item = stek.pop();
        if(bracketsConfig[j][0] !== item) {
          return false;
        }
      }
  }
}

if(stek.length === 0) {
  return true;
} else {
  return false;
}
}
