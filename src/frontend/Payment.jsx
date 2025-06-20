import { Button, Card, CardContent, Typography, Divider, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Payment = () => {
    const location = useLocation();
    const { t, cart } = location.state;

    useEffect(() => {
        // For debug
        // console.log("ok");
    }, [])

    return (
        <Box sx={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.02)' }}>
            <Typography variant="h3" fontWeight={800} color="white" mb={3} sx={{ letterSpacing: 2, textAlign: 'center' }}>
                PAYMENT
            </Typography>
            <Card sx={{ minWidth: 350, maxWidth: 420, borderRadius: 4, boxShadow: 6, p: 2, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(4px)' }}>
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                        <ShoppingCartIcon sx={{ fontSize: 40, color: '#1976d2', mr: 1 }} />
                        <Typography variant="h5" fontWeight={700} color="#222">
                             Summary
                        </Typography>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <List dense>
                        {cart.map((item, index) => (
                            <ListItem key={index} sx={{ py: 0.5 }}>
                                <ListItemText
                                    primary={<Typography fontWeight={500}>{item.title.substring(0, 30)}{item.title.length > 30 ? '...' : ''}</Typography>}
                                    secondary={<Typography variant="body2" color="text.secondary">Qty: {item.qty} × ₹{item.price}</Typography>}
                                />
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <CurrencyRupeeIcon fontSize="small" sx={{ color: 'black' }} />
                                </ListItemIcon>
                                <Typography fontWeight={600} color="black">
                                    {(item.qty * item.price).toFixed(2)}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{ my: 2 }} />
                    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                        <Typography variant="h6" fontWeight={700} color="#222">
                            Total
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <CurrencyRupeeIcon fontSize="medium" sx={{ color: 'black', mr: 0.5 }} />
                            <Typography variant="h5" fontWeight={700} color="#111">
                                {t.toFixed(2)}
                            </Typography>
                        </Box>
                    </Box>
                    <Button fullWidth size="large" variant="contained" color="success" sx={{ borderRadius: 2, fontWeight: 700, fontSize: '1.1rem', py: 1.2, mt: 2, boxShadow: 3 }}>
                        Pay Now
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Payment