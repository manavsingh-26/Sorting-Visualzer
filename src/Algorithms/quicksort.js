export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;

  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(mainArray, start, end, animations) {


  if (end <= start) {
    animations.push([start, start, 'f']);

    return;
  }


  let index = partition(mainArray, start, end, animations);
  animations.push([index, index, 'f']);
  quickSortHelper(mainArray, start, index - 1, animations);
  quickSortHelper(mainArray, index + 1, end, animations);


}

function partition(mainArray, start, end, animations) {

  let pivotIndex = start;

  let pivotValue = mainArray[end];

  animations.push([start, end, 'pipv']);

  for (let i = start; i < end; i++) {
    animations.push([i, end, 'r']);

    if (mainArray[i] < pivotValue) {
      if (i != pivotIndex) {
        animations.push([i, pivotIndex, 'y']);
        animations.push([i, mainArray[pivotIndex], 's']);
        animations.push([pivotIndex, mainArray[i], 's']);
      }

      let temp = mainArray[i];
      mainArray[i] = mainArray[pivotIndex];
      mainArray[pivotIndex] = temp
      animations.push([i, pivotIndex, 'g'])
      pivotIndex++;
      animations.push([pivotIndex, pivotIndex, 'pi']);
    }
    else {
      animations.push([i, end, 'gi']);
    }

  }
  animations.push([pivotIndex, end, 'y']);
  animations.push([pivotIndex, mainArray[end], 's']);
  animations.push([end, mainArray[pivotIndex], 's']);
  let temp = mainArray[pivotIndex];
  mainArray[pivotIndex] = mainArray[end];
  mainArray[end] = temp;
  animations.push([pivotIndex, end, 'g']);

  return pivotIndex;


}