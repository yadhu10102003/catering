import { Box, Typography, Grid } from '@mui/material'

const Footer = () => {
  return (
    <div style={{ width: '100%'}}>
      <Box sx={{
        width: '100%',
        backgroundColor: 'transparent',
        color: '#fff',
        textAlign: 'center',
        py: 8,
        px: 2,
        mt: 4,
        justifyContent: 'center',
        
      }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          textAlign="center"
        >
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Silver Spoon Catering
            </Typography>
            <Typography variant="body2">
              Premium catering services for weddings, events, and celebrations.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">📍 123 Food Street, Flavor Town</Typography>
            <Typography variant="body2">📞 +91 98765 43210</Typography>
            <Typography variant="body2">📧 contact@silverspoon.com</Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" align="center" sx={{ mt: 4, fontSize: '0.85rem' }}>
          © 2025 Silver Spoon Catering. All rights reserved.
        </Typography>
      </Box>
    </div>
  )
}

export default Footer
