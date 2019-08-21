'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var newCollectionA = countSameElements(collectionA);
  return newCountCollection(newCollectionA,objectB);
}
function countSameElements(collectionA){
  var map = new Map();
    var result = [];
    for (let i = 0;i<collectionA.length;i++){
      if(map.get(collectionA[i]) == null){
        map.set(collectionA[i],1)
      }
      else{
        map.set(collectionA[i],map.get(collectionA[i])+1)
      }
    }
    map.forEach(function(value,key){
      result.push({key:key,count:value})
    })
    return result;
}

function newCountCollection(newCollectionA,objectB){
for(var i = 0; i < objectB.value.length; i++){
  for(var j = 0; j < newCollectionA.length; j++){
    if(objectB.value[i] == newCollectionA[j].key){
      newCollectionA[j].count = newCollectionA[j].count - parseInt((newCollectionA[j].count)/3);
    }
  }
}
return newCollectionA;
}
