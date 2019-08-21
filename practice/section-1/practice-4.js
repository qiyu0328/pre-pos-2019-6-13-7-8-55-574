'use strict';

function collectSameElements(collectionA, objectB) {
  let result=[];
  let subcollectionA=[];
  for (let i=0;i<collectionA.length;i++){
    subcollectionA[i]=collectionA[i].key;
    // subcollectionA.push(collectionA[i].key);
  }
  for (let j=0;j<subcollectionA.length;j++){
    for (let k=0;k<objectB.value.length;k++){
      if (subcollectionA[j]===objectB.value[k]){
         result.push(subcollectionA[j]);
      }
    }
  }

  return result;
}
