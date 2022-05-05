export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    SelectionSortHelper(array, animations);
    console.log(array);
    return animations;
  }

function SelectionSortHelper(array, animations){

    for(let i = 0; i< array.length; i++){
        
            let k = i;
            animations.push([i,k,'y']);

            for(let j= i+1; j<array.length ; j++){
                animations.push([i,j,'r'])
                if(array[j] < array[k]){
                    if(k >=i){
                        animations.push([i,k,'p']);
                    }
                    
                        
                    k=j;
                    animations.push([i,k,'y']);
                }
                else{
                    animations.push([i,j,'p']);
                }

            }
            animations.push([i,array[k],'si']);
            if(i !== k){
                animations.push([k,array[i],'sk']);
            }
            
            

            let temp = array[k];
            array[k] = array[i];
            array[i] = temp;
    }

}