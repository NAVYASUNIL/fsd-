import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
        <AppBar variant='contained' color='info'>
        
            <Toolbar >
                <Typography variant='h6'>My App3</Typography>
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
                <Link to='/s'>
                <Button variant='contained' color='secondary' > click me</Button>
                </Link> &nbsp;&nbsp;
                <Link to='/c'>
                <Button variant='contained' color='secondary' > count</Button>
                </Link> &nbsp;&nbsp;
                <Link to='/n'>
                <Button variant='contained' color='secondary' > Name</Button>
                </Link>
            </Toolbar>
        </AppBar>
        <br /><br />
   
    </div>
  )
}

export default Navbar