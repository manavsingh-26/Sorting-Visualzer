export function getBubbleSortAnimations (array){
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array,animations);
    return animations;
}

function bubbleSortHelper(array,animations) {

    for( let i =0; i< array.length -1 ; i++){
        for( let j = 0; j< array.length - i -1 ; j++){

            animations.push([j,j+1,'r']);
            
            if(array[j] > array[j+1]){
                animations.push([j,j+1,'y']);
                animations.push([j,array[j+1],'s']);
                animations.push([j+1,array[j],'s']);
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                animations.push([j,j+1,'g']);
            }
            else{
                animations.push([j,j+1,'g']);
            }

        }
        animations.push([array.length-i-1,i,'f']);

    }
    animations.push([0,0,'f']);
}