import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import Portfolio from './Portfolio.js'
import './style.css'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
    <BrowserRouter>
        <Portfolio />
    </BrowserRouter>
    </>
)