export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }

function quickSortHelper(mainArray , start , end, animations) {
  if(end<=start)
    return;
  
  let index  = partition(mainArray,start,end,animations);
  quickSortHelper(mainArray,start,index-1,animations);
  quickSortHelper(mainArray,index+1,end,animations);


    
}

function partition(mainArray,start,end,animations) {

  let pivotIndex  = start;
  let pivotValue = mainArray[end];

  for (let i = start; i < end; i++) {
    if(mainArray[i] < pivotValue){
      let temp = mainArray[i];
      mainArray[i] = mainArray[pivotIndex];
      mainArray[pivotIndex] = temp
      pivotIndex++;
    }
    
  }
  let temp = mainArray[pivotIndex];
  mainArray[pivotIndex] = mainArray[end];
  mainArray[end] = temp;

  return pivotIndex;
  
}