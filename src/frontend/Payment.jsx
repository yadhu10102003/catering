import { Button, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Payment = (props) => {

    const location = useLocation();
    const { t, cart } = location.state;


    useEffect(() => {
        console.log("ok");

    }, [])

    return (
        <div>
            <h1>Payment</h1>

            <div className='pay'>
                {/* <Grid container spacing={2}>
                    <Grid size={6}> */}
                <div className='inner-pay'>
                    <h2 style={{ color: "black",marginBottom:"50px" }}>CART</h2>
                    <ul style={{ color: "black" }}>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.title} × {item.qty} @ ₹{item.price} = ₹{(item.qty * item.price).toFixed(2)}
                            </li>
                        ))}
                    </ul>
                    <p style={{ color: "black" }}>Total: ₹{t.toFixed(2)}</p>
                    <Button sx={{marginTop:"200px", marginBottom:"20px"}} variant='contained' color='info'>Pay</Button>
                </div>
                {/* </Grid>
                </Grid> */}

            </div>


            {/* <h2>Items:</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.title} × {item.qty} @ ₹{item.price} = ₹{(item.qty * item.price).toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Total: ₹{t.toFixed(2)}</p>

            <Button variant='contained' color='info'>Pay</Button> */}


        </div>
    );

}

export default Payment