import React, { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Cart from './Cart';

const Products = () => {
    const [prod, setProd] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [openCart, setOpenCart] = useState(false);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(res => setProd(res.data));
    }, []);

    const addToCart = (item) => {
        const existingIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        let updatedCart;

        if (existingIndex !== -1) {
            updatedCart = cart.map((cartItem, index) => {
                if (index === existingIndex) {
                    return { ...cartItem, qty: cartItem.qty + 1 };
                }
                return cartItem;
            });
        } else {
            updatedCart = [...cart, { ...item, qty: 1 }];
        }

        setCart(updatedCart);
        updateTotal(updatedCart);
    };

    const updateTotal = (cartItems) => {
        const newTotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
        setTotal(newTotal);
    };

    const shareItem = (title, url) => {
        navigator.clipboard.writeText(`${title} - ${url}`);
        alert("Link copied to clipboard!");
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3, pt: 10, backgroundColor: 'inherit', minHeight: '100vh' }}>
            {cart.length > 0 && (
                <Paper
                    elevation={4}
                    sx={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16,
                        px: 3,
                        py: 1,
                        bgcolor: 'grey',
                        zIndex: 1000,
                        borderRadius: 2,
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}
                    onClick={() => setOpenCart(!openCart)}
                >
                    🛒 {cart.reduce((acc, item) => acc + item.qty, 0)} items | ₹{total.toFixed(2)}
                </Paper>
            )}

            <Grid container spacing={4} justifyContent="center">
                {prod.map((val, index) => (
                    <Grid item key={index}>
                        <Card sx={{ maxWidth: 320, minHeight: 440, position: 'relative', borderRadius: 4, boxShadow: 6 ,backgroundColor:'white'}}>
                            <CardMedia
                                sx={{ height: 180, objectFit: 'contain', p: 2 }}
                                image={val.image}
                                title={val.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" color="Black">
                                    Hotel: {val.title.substring(0, 20)}...
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
                                    {val.description.substring(0, 100)}...
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                    Specialty: ₹{val.price} per dish
                                </Typography>
                            </CardContent>

                            <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
                                <Stack direction="row" spacing={1}>
                                    <Button size="small" variant="outlined" onClick={() => shareItem(val.title, val.image)}>
                                        <ShareIcon fontSize="small" />
                                    </Button>
                                </Stack>
                                <Fab size="small" color="secondary" aria-label="add" sx={{ boxShadow: 2 }} onClick={() => addToCart(val)}>
                                    <AddIcon />
                                </Fab>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {openCart && (
                <Cart
                    cart={cart}
                    setCart={setCart}
                    total={total}
                    setTotal={setTotal}
                    onClose={() => setOpenCart(false)}
                />
            )}
        </Box>
    );
};

export default Products;
