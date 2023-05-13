import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


import './globalStyles.scss'

const container = document.getElementById('root')
const root = createRoot(container)

/*Rendering the App component in the root element of the index.html file*/
root.render(<App />)



