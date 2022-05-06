import React from 'react'
import './Bar.css'

const Bar = (props) => {
  return (
    <div className='array-bar' style={{
      backgroundColor: `${props.color}`,
      // height: `${props.height}px`,
      paddingTop: `${props.height}px`,
      width: `${props.width}px`,
      transition: `${props.transition}ms`,
      fontSize: `${props.font}px`,
    }}>
      {props.width >= 20 && props.height}

    </div>
  )
}

export default Bar