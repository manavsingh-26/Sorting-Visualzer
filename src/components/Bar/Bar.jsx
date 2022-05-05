import React from 'react'
import './Bar.css'

const Bar = (props) => {
  return (
    <div  className='array-bar' style={{
        backgroundColor : `${props.color}`,
        // height: `${props.height}px`,
        paddingTop: `${props.height}px`,
        width: `${props.width}px`,
        transition: `${props.transition}ms`,
    }}>
    {props.width >=24 && props.height}
       
    </div>
  )
}

export default Bar