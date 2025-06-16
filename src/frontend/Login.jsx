import { TextField, Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      < div className='dis'>
        <h1>Sign in</h1>
        <div className='tf'>
          <TextField
            variant="outlined"
            size="small"
            label="Name"
            sx={{
              backgroundColor: 'GrayText', borderRadius: 1, '&:focus-within': {
                backgroundColor: 'white',
              }
            }}
            required
          />
        </div>

        <br />
        <div className='tf'>
          <TextField
            variant="outlined"
            size="small"
            label="Password"
            sx={{
              backgroundColor: 'GrayText', borderRadius: 1, '&:focus-within': {
                backgroundColor: 'white',
              }
            }}
            required
          />
        </div>
        <br />

        <Button variant="contained" >Login</Button>
        <p>New User?  <a href="/reg">Signup</a></p>


      </div>


    </div >
  )
}

export default Login