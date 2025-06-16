import { AppBar, Toolbar, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log("Search:", e.target.value)
    }

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <h2>Silver Spoon Catering</h2>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search..."
                        value={search}
                        onChange={handleSearch}
                        sx={{ backgroundColor: 'white', borderRadius: 1, marginX: 1 }}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='secondary' onClick={() => navigate('/log')}>
                        &nbsp;Register&nbsp;/&nbsp;Login&nbsp;
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant='contained' color='secondary' onClick={() => navigate('/prod')}>
                        &nbsp;Products&nbsp;
                    </Button>

                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant='outlined' color='secondary' onClick={() => navigate('/abt')}>
                        &nbsp;About us&nbsp;
                    </Button>



                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
