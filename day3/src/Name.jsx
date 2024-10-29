import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var[x,setx]=useState();
    const input1 =()=>{
        setx("React")
    }
    const input2 =()=>{
        setx("Angular")
    }
    const input3 =()=>{
        setx("Next")
    }
    useEffect(()=>{
        input2()
    },[])
  return (
    <div><br /><br /><br /><br /><br /><Typography variant='h4'>Count:&nbsp;{x}</Typography><br />

    <Button variant="contained" color='primary' onClick={input1}>REACT</Button>&nbsp;&nbsp;
    <Button variant="contained" color='secondary' onClick={input2}>ANGULAR</Button>&nbsp;&nbsp;
    <Button variant="contained" color='success' onClick={input3}>NEXT</Button>
       </div>
       
  )
}

export default Name