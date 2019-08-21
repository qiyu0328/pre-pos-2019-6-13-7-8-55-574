'use strict';

function collectSameElements(collectionA, objectB) {
  var result=[];
  var subCollectionB =objectB.value;
  for (let i=0;i<collectionA.length;i++){
    for (let j=0;j<subCollectionB.length;j++){
      if (collectionA[i]===subCollectionB[j]){
        result.push(collectionA[i]);
      }
    }
  }
  return result;
}
