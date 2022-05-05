export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let isFinal =false;
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
     mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
     mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
     if(startIdx===0 && endIdx === mainArray.length-1){
      isFinal=true;
     }
     
    
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations,isFinal);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
    isFinal,
  ) {
    console.log(isFinal);
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.

      animations.push([i, j,isFinal]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      
      animations.push([i, j,isFinal]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        if(isFinal){
          animations.push([k, auxiliaryArray[i],1]);
        }
        else{
          animations.push([k, auxiliaryArray[i],0]);
        }
                
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        if(isFinal){
          animations.push([k, auxiliaryArray[j],1]);
        }
        else{
          animations.push([k, auxiliaryArray[j],0]);
        }
          
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i,isFinal]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i,isFinal]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      if(isFinal){
        animations.push([k, auxiliaryArray[i],1]);
      }
      else{
        animations.push([k, auxiliaryArray[i],0]);
      }
      
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j,isFinal]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j,isFinal]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      if(isFinal){
        animations.push([k, auxiliaryArray[j],1]);
      }
      else{
        animations.push([k, auxiliaryArray[j],0]);
      }
      
      mainArray[k++] = auxiliaryArray[j++];
    }
  }