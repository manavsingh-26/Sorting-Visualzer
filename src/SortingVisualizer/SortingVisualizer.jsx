import React, { useEffect, useState } from 'react'
import './SortingVisualizer.css'
import Bar from '../components/Bar/Bar';
import Navbar from '../components/Navbar/Navbar';
import { getMergeSortAnimations } from '../Algorithms/mergesort';
import { getInsertionSortAnimations } from '../Algorithms/insertionsort';
import { getSelectionSortAnimations } from '../Algorithms/selection';
import { getBubbleSortAnimations } from '../Algorithms/bubblesort';
import { getQuickSortAnimations } from '../Algorithms/quicksort';
import $ from 'jquery';

//const ANIMATION_SPEED = 10;

const PRIMARY_COLOR = 'blue';
const SECONDARY_COLOR = 'red';
const SWAP_COLOR = 'yellow';
const CORRECT_COLOR = 'green';
const SORTED_COLOR = '#e39ff6';

const SortingVisualizer = () => {

    const [running, setRunning] = useState(false);
    const [NUMBER_OF_BARS, setNUMBER_OF_BARS] = useState(30);
    const [ANIMATION_SPEED, setANIMATION_SPEED] = useState(200);

    var numWidth = Math.floor($(document).width() / (NUMBER_OF_BARS * 2));
    var width = numWidth;
    useEffect(() => {
        resetArray();
    }, [])

    const [array, setarray] = useState([])
    let cells = []
    cells = array.map((value, id) => <Bar color={PRIMARY_COLOR} key={id} height={value} width={width} transition={ANIMATION_SPEED} />)
    

    function randomIntFromInterval(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const resetBars = () =>{
        const arrayBars = document.getElementsByClassName('array-bar');
        for( let i=0; i< arrayBars.length ; i++){
            const barOneStyle = arrayBars[i].style;
            barOneStyle.backgroundColor = PRIMARY_COLOR;


        }

    }

    const resetArray = (bars = 30) => {
        setNUMBER_OF_BARS(bars);
        const arr = [];
        for (let i = 0; i < bars; i++) {
            arr.push(randomIntFromInterval(10, 400));
        }
        setarray(arr);
        resetBars();
        
     

    }

    const setSpeed = (speed =100 ) =>{
        setANIMATION_SPEED(speed);
    }

//--------------------------------------------------------------------------MERGE SORT-------------------------------------------------------------

    const mergeSort = () => {
        resetBars();
       
        const animations = getMergeSortAnimations(array);
       
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
           
            
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx,final] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                const color1 = i % 3 === 0 ? SECONDARY_COLOR : final? SORTED_COLOR : PRIMARY_COLOR;
                const color2 = i % 3 === 0 ? SECONDARY_COLOR :  final? barTwoIdx<= barOneIdx ? SORTED_COLOR: PRIMARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color1;
                    barTwoStyle.backgroundColor = color2;
                }, i * ANIMATION_SPEED);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight,final] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx];
                    barOneStyle.style.paddingTop = `${newHeight}px`;
                    barOneStyle.innerHTML = width >=24 ? newHeight : ''; 

                    barOneStyle.style.backgroundColor = 'green';
                    

                  
                    setTimeout(()=>{
                        barOneStyle.style.backgroundColor = final? SORTED_COLOR : PRIMARY_COLOR
                    },ANIMATION_SPEED/1.2)
                    
                    

                    
                }, i * ANIMATION_SPEED);
            }
        }       
      
       
    }

//--------------------------------------------------------------------------INSERTION SORT-------------------------------------------------------------

    const insertionsort = () =>{
        resetBars();

        const animations = getInsertionSortAnimations(array);
        for(let i = 0; i < animations.length ; i++){
            const arrayBars = document.getElementsByClassName('array-bar');

            const[first,second,color] = animations[i];

            if(color=== 'f'){
                const barOneStyle = arrayBars[first].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SORTED_COLOR;
                   
                }, i * ANIMATION_SPEED);
            }

            if(color === 'r'){
                const barOneStyle = arrayBars[first].style;
                const barTwoStyle = arrayBars[second].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED);


            }
            else if (color === 'y'){
                const barOneStyle = arrayBars[first].style;
                const barTwoStyle = arrayBars[second].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SWAP_COLOR;
                    barTwoStyle.backgroundColor = SWAP_COLOR;
                }, i * ANIMATION_SPEED);


            }
            else if(color === 'g'){
                const barOneStyle = arrayBars[first].style;
                const barTwoStyle = arrayBars[second].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = CORRECT_COLOR;
                    barTwoStyle.backgroundColor = CORRECT_COLOR;
                    setTimeout(()=>{
                        barOneStyle.backgroundColor = PRIMARY_COLOR;
                        barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    },ANIMATION_SPEED/1.5)
                }, i * ANIMATION_SPEED);
            }
            else if (color === 's'){
                const barOneStyle = arrayBars[first];

                setTimeout(() => {
     
                    barOneStyle.innerHTML = width >=24 ? second : ''; 
                    barOneStyle.style.paddingTop = `${second}px`;
                   
                }, (i) * ANIMATION_SPEED);
                
                

            }

        }
        
    }

//--------------------------------------------------------------------------SELECTION SORT-------------------------------------------------------------

    const selectionsort = () => {
        resetBars();
        const animations = getSelectionSortAnimations(array);

        for(let i=0;i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const[first,second,color] = animations[i];
            console.log(color);

            if(color === 'y'){
                
                const barOneStyle = arrayBars[first].style;
                const barTwoStyle = arrayBars[second].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SWAP_COLOR;
                    barTwoStyle.backgroundColor = 'orange';
                }, i * ANIMATION_SPEED);
            }

            if(color === 'r'){
                const barOneStyle = arrayBars[first].style;
                const barTwoStyle = arrayBars[second].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SWAP_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED);
            }
            if(color === 'p'){
                const barOneStyle = arrayBars[first].style;
                const barTwoStyle = arrayBars[second].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SWAP_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED);
            }
            if(color === 'f'){
                const barOneStyle = arrayBars[first].style;
                const barTwoStyle = arrayBars[second].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SWAP_COLOR;
                    barTwoStyle.backgroundColor = SORTED_COLOR;
                }, i * ANIMATION_SPEED);
            }
            if(color === 'si'){
                const barOneStyle = arrayBars[first];
                
                setTimeout(() => {
                    barOneStyle.innerHTML = width >=24 ? second : '';
                    barOneStyle.style.paddingTop = `${second}px`;
                    barOneStyle.style.backgroundColor = SORTED_COLOR;
                }, i * ANIMATION_SPEED);
            }
            if(color === 'sk'){
                console.log(color)
                const barOneStyle = arrayBars[first];
                
                setTimeout(() => {
                    barOneStyle.innerHTML = width >=24 ? second : '';

                    barOneStyle.style.paddingTop = `${second}px`;
                    barOneStyle.style.backgroundColor = CORRECT_COLOR;
                    setTimeout(()=>{
                        barOneStyle.style.backgroundColor = PRIMARY_COLOR;
                    },ANIMATION_SPEED/1.2)
                }, i * ANIMATION_SPEED);
            }

        }

    }
//--------------------------------------------------------------------------QUICK SORT--------------------------------------------------------------

const quick = () =>{
    resetBars();
    const animations = getQuickSortAnimations(array);
    

}

//--------------------------------------------------------------------------BUBBLE SORT-------------------------------------------------------------
    const bubble = () =>{
        resetBars();
        const animations = getBubbleSortAnimations(array);
        for(let i =0 ; i<animations.length ; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [first ,  second, color] = animations[i];
            if(color === 'r'){
                const barOneStyle = arrayBars[first].style;
                const barTwoStyle = arrayBars[second].style;

                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor =  SECONDARY_COLOR;
                }, i*ANIMATION_SPEED);

            }

            if(color === 'y'){
                const barOneStyle = arrayBars[first].style;
                const barTwoStyle = arrayBars[second].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SWAP_COLOR;
                    barTwoStyle.backgroundColor =  SWAP_COLOR;
                }, i*ANIMATION_SPEED);

            }
            if(color === 'g'){
                setTimeout(() => {
                const barOneStyle = arrayBars[first].style;
                const barTwoStyle = arrayBars[second].style;
                barOneStyle.backgroundColor = CORRECT_COLOR;
                barTwoStyle.backgroundColor = CORRECT_COLOR;

                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor =  PRIMARY_COLOR;
                    
                }, ANIMATION_SPEED*0.1 );
                    
                }, i*ANIMATION_SPEED);
                
            }
            if(color === 'f'){
                const barOneStyle = arrayBars[first].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = SORTED_COLOR;
                    
                }, i * ANIMATION_SPEED);
            }
            if( color === 's'){
                const barOneStyle = arrayBars[first]
                const [f,s,c] = animations[i+1];
                const barTwoStyle = arrayBars[f];
                i++
                setTimeout(() => {
                    barOneStyle.style.paddingTop = `${second}px`;
                    barOneStyle.innerHTML = width >= 24 ? second : ''; 
                    barTwoStyle.style.paddingTop = `${s}px`;
                    barTwoStyle.innerHTML = width >= 24 ? s : '';
                    
                }, i*ANIMATION_SPEED);
                
            }
        }
    }




    return (
        <div>
            <Navbar disable={running} generate={resetArray} s = {selectionsort} merge={mergeSort} insertion = {insertionsort} bubble = {bubble} quick = {quick} speed = {setSpeed}/>
            <div className='array-box'>
            {cells}
                

            </div>
        </div>

    )
}

export default SortingVisualizer