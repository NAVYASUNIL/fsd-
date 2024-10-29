import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[Count,setCount]= useState(0);
    const add = ()=>{
       
        setCount(Count+1)
    }
    const sub =()=>{
       
        setCount(Count-1)
    }
  return (
    <div><br /><br /><br /><br /><br /><Typography variant='h4'>Count:&nbsp;{Count}</Typography><br />

<Button variant="contained" color='success' onClick={add}>Increment +</Button>&nbsp;&nbsp;
<Button variant="contained" color='error' onClick={sub}>Decrement -</Button>
   </div>
  )
}

export default Counter