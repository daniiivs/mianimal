import React from 'react'
import Grid2 from '@mui/material/Grid2'
import Button from '@mui/material/Button'

function Appgrid() {
    return (
        <>
            <Grid2
                container spacing={{xs: 1, sm: 2, md: 4}}
            >
                <Grid2
                    size={{xs: 5, sm: 2, md: 5}}
                >
                    <Button variant='contained' fullWidth>Botón 1</Button>
                </Grid2>
                <Grid2
                    size={{xs: 4, sm: 8, md: 2}}
                >
                    <Button variant='contained' fullWidth>Botón 2</Button>
                </Grid2>
                <Grid2
                    size={{xs: 3, sm: 2, md: 5}}
                >
                    <Button variant='contained' fullWidth>Botón 3</Button>
                </Grid2>
            </Grid2>
        </>
    )
}

export default Appgrid