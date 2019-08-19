'use strict';

function collectSameElements(collectionA, collectionB) {
  
  var result = [];
    for(var i = 0; i < collectionA.length; i ++) {
        var temp = collectionA[i];
        for(var j = 0; j < collectionB.length; j ++) {
            if(temp === collectionB[j]) {
                result.push(temp);
                break;
            }
        }
    }
    return array_remove_repeat(result);
}


function array_remove_repeat(a) { // 去重
  var r = [];
  for(var i = 0; i < a.length; i ++) {
      var flag = true;
      var temp = a[i];
      for(var j = 0; j < r.length; j ++) {
          if(temp === r[j]) {
              flag = false;å
              break;
          }
      }
      if(flag) {
          r.push(temp);
      }
  }
  return r;
}