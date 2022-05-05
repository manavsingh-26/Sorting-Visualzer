import React, {useEffect, useState} from 'react'
import { Button, ButtonGroup } from '@mui/material'
import Slider from '@mui/material/Slider';
import './Navbar.css';


const Navbar = (props) => {

 

    const [arrSize, setArrSize] = useState(30)
    const [speed, setSpeed] = useState(100);
    // const [disable,setDisable] = useState(false);

    // useEffect(()=>{
    //     setDisable(props.disable);
    // },[disable])

    return (
        <div className='nav'>
            <div className='title'><h1>Sorting Visualizer</h1></div>
            <div >
                <Button style={{marginTop:'20px'}} variant="contained" onClick={() => props.generate(arrSize)} disabled = {props.disable}>Generate Array</Button>
                <Slider
                    
                    onChange={(e,n)=>{ 
                        setArrSize(n);
                        props.generate(arrSize)
                        
                    }}
                    value={arrSize} 
                                
                    min={10}
                    max={110}
                    disabled = {props.disable}
                />


            </div>
            <div>
                <Button style={{marginTop : '20px' , paddingRight: '50px' , paddingLeft: '50px'}} variant = 'contained' >Speed</Button>
                <Slider
                    min = {10}
                    max = {1000}
                    value = {speed}
                    onChange={(e,n)=>{ 
                        setSpeed(n);
                        props.speed(1010 - speed)
                        
                    }}

                    

                />
            </div>
            <div><ButtonGroup style={{marginBottom: '14px'}} variant="contained" aria-label="text button group">
                <Button style={{paddingBottom:'7px'}} onClick={() => props.merge()} disabled = {props.disable}>Merge Sort</Button>
                <Button onClick={() => props.s()} disabled = {props.disable}>Selection Sort</Button>
                <Button onClick={() => props.insertion()} disabled = {props.disable}>Insertion Sort</Button>
                <Button onClick={() => props.quick()} disabled = {props.disable}>Quick Sort</Button>
                <Button onClick={() => props.bubble()} disabled = {props.disable}>Bubble Sort</Button>
            </ButtonGroup></div>

        </div>
    )
}

export default Navbar