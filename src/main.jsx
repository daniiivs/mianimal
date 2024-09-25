import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import Appgrid from "./components/Appgrid.jsx";
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
        <br/><br/><br/><br/>
        <Appgrid/>
    </StrictMode>,
)
