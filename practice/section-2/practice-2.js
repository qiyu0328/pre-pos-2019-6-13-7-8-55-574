'use strict';

function countSameElements(collection) {
  var result = [];
  var map = new Map();
  var key;
  var value;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length == 1) {
      if (map.get(collection[i])==null){
          map.set(collection[i], 1);
      }else{
          map.set(collection[i], map.get(collection[i]) + 1);
      }
    }
    else{
       key = collection[i][0];
       value = Number(collection[i][2]);
      if (map.get(key) == null) {
        map.set(key, value);
      } else {
        map.set(key, map.get(key)+value);
      }
    }
    }
    map.forEach(function(value, key) {
    result.push({key:key,count:value})
  });

  return result;
}
