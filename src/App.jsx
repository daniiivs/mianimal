import React from 'react'
import './App.css'
import {useState} from "react"
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

function App() {
    const datos = {
        animal: 'gato',
        imageUrl: '/catImage.png',
        imageSize: 200
    }
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <Stack
                direction={{xs: 'column', sm: 'column', md: 'row'}}
                sx={{alignItems: 'center', justifyContent: 'center'}}
                spacing={{xs: 2, sm: 4, md: 6}}
            >
                <Typography variant='h2'>Soy un {datos.animal} vivo y feliz</Typography>
                <Avatar src={datos.imageUrl} alt='Gato feliz'
                        sx={{height: datos.imageSize, width: datos.imageSize}}/>
                <Button color='primary' size='small' variant='text' onClick={handleClick}>Me
                    acariciaste {count} veces</Button>
                <Button color='secondary' size='medium' variant='contained' onClick={handleClick}>Me
                    acariciaste {count} veces</Button>
                <Button color='success' size='large' variant='outlined' onClick={handleClick} disabled='true'>Me
                    acariciaste {count} veces (deshabilitado)</Button>
                <Button sx={{color: 'orange', backgroundColor: 'yellow'}} size='large' variant='contained'
                        onClick={handleClick}>Letras naranjas y fondo amarillo</Button>
                <Button sx={{color: 'red', backgroundColor: 'pink'}} size='large' variant='outlined'
                        onClick={handleClick}>Letras rojas y fondo rosa</Button>
            </Stack>
        </>
    )
}

export default App