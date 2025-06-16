import { AppBar, Toolbar,Button } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <h2>Silver Spoon Catering</h2>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='secondary' href='./log'>&nbsp;Register&nbsp;/&nbsp;Login&nbsp;</Button>
                    
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar