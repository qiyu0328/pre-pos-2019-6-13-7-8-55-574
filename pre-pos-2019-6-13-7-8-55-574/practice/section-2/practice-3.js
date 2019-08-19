'use strict';

function countSameElements(collection) {
  var result = [];
  var map = new Map();
  var v,c;
  for (var i=0;i<collection.length;i++){
    if(collection[i].length==1){
      if (map.get(collection[i])==null){
        map.set(collection[i],1);
      }else{
        map.set(collection[i],map.get(collection[i])+1);
      }
    }else{
      v=collection[i][0];
      c=parseInt(collection[i].substr(2,2));
      if (map.get(v)==null){
        map.set(v,c);
      }else{
        map.set(v,map.get(v)+c);
      }
    }   
  }
  console.log(map);
  map.forEach(function(key,value){
    result.push({name:value,summary:key})
  });
  return result;  

}
