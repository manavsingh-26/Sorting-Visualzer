import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from '@mui/material'
import Slider from '@mui/material/Slider';
import './Navbar.css';


const Navbar = (props) => {



    const [arrSize, setArrSize] = useState(30)
    const [speed, setSpeed] = useState(100);
    // const [disable,setDisable] = useState(false);

    // useEffect(()=>{
    //     setDisable(props.disable);
    // },[props.disable])

    return (

        <div className='nav'>
            <div className='title'><h1>Sorting Visualizer</h1></div>
            <div style={{ margin: '0 10px' }}>
                <Button className='disable' style={{ marginTop: '20px' }} variant="contained" onClick={() => props.generate(arrSize)} disabled={props.disable}>Generate Array</Button>
                <Slider

                    onChange={(e, n) => {
                        setArrSize(n);
                        props.generate(arrSize)

                    }}
                    value={arrSize}

                    min={10}
                    max={110}
                    className='disable'
                />


            </div>
            <div>
                <Button className='disable' style={{ marginTop: '20px', paddingRight: '50px', paddingLeft: '50px', marginRight: '10px' }} variant='contained' >Speed</Button>
                <Slider
                    className='disable'
                    min={10}
                    max={1005}
                    value={speed}
                    onChange={(e, n) => {
                        setSpeed(n);
                        props.speed(1010 - speed)

                    }}



                />
            </div>
            <div><ButtonGroup style={{ marginBottom: '14px' }} variant="contained" aria-label="text button group">
                <Button className={'disable'} style={{ paddingBottom: '7px' }} onClick={() => props.merge()} disabled={props.disable}>Merge Sort</Button>
                <Button className={'disable'} onClick={() => props.s()} disabled={props.disable}>Selection Sort</Button>
                <Button className={'disable'} onClick={() => props.insertion()} disabled={props.disable}>Insertion Sort</Button>
                <Button className={'disable'} onClick={() => props.quick()} disabled={props.disable}>Quick Sort</Button>
                <Button className={'disable'} onClick={() => props.bubble()} disabled={props.disable}>Bubble Sort</Button>
            </ButtonGroup></div>

        </div>
    )
}

export default Navbar