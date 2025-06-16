import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



const Products = () => {
    return (
        <div>
            <Fab size="large" color="secondary" aria-label="add" sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}>
                <AddIcon />
            </Fab>

            

        </div>
    )
}

export default Products