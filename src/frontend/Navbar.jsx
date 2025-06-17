import { AppBar, Toolbar, Button, TextField, Box, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log("Search:", e.target.value)

    }

    return (
        <div>
            <AppBar color='transparent' >
                <Toolbar>
                    <h2>Silver Spoon Catering</h2>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button variant='outlined' color='white' onClick={() => navigate('/')}>
                        &nbsp;Home&nbsp;
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant='outlined' color='white' onClick={() => navigate('/log')}>
                        &nbsp;Register&nbsp;/&nbsp;Login&nbsp;
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant='outlined' color='white' onClick={() => navigate('/prod')}>
                        &nbsp;Products&nbsp;
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant='outlined' color='white' onClick={() => navigate('/abt')}>
                        &nbsp;About us&nbsp;
                    </Button>
                    &nbsp;&nbsp;&nbsp;


                    <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearch}
                        sx={{
                            backgroundColor: 'GrayText',
                            width:"200px",
                            borderRadius: 1,
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused': {
                                    backgroundColor: 'white',
                                },
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar

