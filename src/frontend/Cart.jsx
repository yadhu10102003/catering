import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const Cart = ({ cart, setCart, total, setTotal }) => {
    // Count quantities of each item
    const cartMap = {};
    cart.forEach(item => {
        cartMap[item.id] = cartMap[item.id] ? { ...cartMap[item.id], qty: cartMap[item.id].qty + 1 } : { ...item, qty: 1 };
    });
    const items = Object.values(cartMap);

    const removeItem = (id) => {
    const updatedCart = cart.map(item => {
        if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
        }
        return item;
    }).filter(item => item.qty > 0);

    setCart(updatedCart);
    const newTotal = updatedCart.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(newTotal);
};


    return (
        <Paper elevation={4} sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            p: 2,
            bgcolor: '#ffffff',
            zIndex: 1000,
            borderRadius: 2,
            minWidth: 280,
            maxHeight: 400,
            overflowY: 'auto'
        }}>
            <Typography variant="h6" gutterBottom>🛒 Cart</Typography>
            {items.map((item) => (
                <Box key={item.id} sx={{ mb: 1 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="body2">
                            {item.title.substring(0, 20)}... × {item.qty}
                        </Typography>
                        <IconButton size="small" onClick={() => removeItem(item.id)}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>
                    <Divider />
                </Box>
            ))}
            <Typography sx={{ mt: 2, fontWeight: 600 }}>
                Total: ₹{total.toFixed(2)}
            </Typography>
        </Paper>
    );
};

export default Cart;
