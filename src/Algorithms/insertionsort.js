export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    InsertionSortHelper(array, animations);
    return animations;
  }

function InsertionSortHelper(mainArray, animations){

    animations.push([0,0,'r']);
    animations.push([0,0,'g']);

    for(let i=1; i<mainArray.length ; i++){

        let k = i;
        animations.push([k,k-1,'r']);
        if(mainArray[k] < mainArray[k-1]){
            animations.push([k,k-1,'y']);

        }
        else{
            animations.push([k,k-1,'g']);
        }
        while(k!==0 && mainArray[k] < mainArray[k-1] ){
                animations.push([k,mainArray[k-1],'s']);
                animations.push([k-1,mainArray[k],'s'])
            
                let temp = mainArray[k];
                mainArray[k] = mainArray[k-1];
                mainArray[k-1] = temp;
                animations.push([k,k-1,'g']);
                k--;
                if(k===0){
                    animations.push([k,k,'r']);
                    animations.push([k,k,'g']);
                }
                else if(mainArray[k] < mainArray[k-1]){
                    animations.push([k,k-1,'r']);
                    animations.push([k,k-1,'y']);
                    

                }
                else if(mainArray[k] >= mainArray[k-1]){
                    animations.push([k,k-1,'r']);
                    animations.push([k,k-1,'g']);
                }
                       

        }
    
    }
    for(let i=0; i< mainArray.length ; i++){
        animations.push([i,i,'f']);
    }

}