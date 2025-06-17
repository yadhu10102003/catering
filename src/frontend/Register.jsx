import React from 'react'
import { TextField, Button } from '@mui/material'

const Register = () => {
  return (
    <div>
      < div className='disup'>
        <h1>Sign Up</h1>
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
        <div className='tf'>
          <TextField
            variant="outlined"
            size="small"
            label="Email-id"
            sx={{
              backgroundColor: 'GrayText', borderRadius: 1, '&:focus-within': {
                backgroundColor: 'white',
              }
            }}
            required
          />
        </div>
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
        <div className='tf'>
          <TextField
            variant="outlined"
            size="small"
            label="Re-enter Password"
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
        <p>Already have an account? <a href="/log">Sign in</a></p>


      </div>


    </div >
  )
}

export default Register