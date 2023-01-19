import React from 'react'
import { Spinner } from 'react-bootstrap';


const loading = () => {
  return (
    <Spinner 
        animation="border" 
        style={{
            height:'100px',
            width:'100px',
            margin:'auto',
            display:'block'
        }} 
    >
    <span className='sr-only'>Loading...</span>
    </Spinner>
    
  )
}

export default loading