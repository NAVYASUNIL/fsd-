import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const state = () => {
  
      var [name,setname]=useState("Navya")
      var [value,setvalue]=useState()

      const handleInput =(e)=>{  
      console.log(e.target.value)
      setname(e.target.value)

    }
   
      const onsubmit =()=>{
      console.log("clicked")
      setvalue(name)
      
    }
  return (
    <div><Typography variant='h6'>
        Welcome  {value}
        </Typography>
        <TextField variant='outlined' color='secondary' onChange={handleInput} label1='Enter Name'/><br /><br />
        <Button variant='contained'color='secondary'  onClick={onsubmit}>submit</Button>
        </div>
  )
}

export default state