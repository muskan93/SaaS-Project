import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import './styles/reset.css'
import './styles/variables.css'
import './styles/index.css'
import './styles/typography.css'
import './styles/helpers.css'
import './styles/button.css'
import './styles/buttonGroup.css'
import './styles/chip.css'
import './styles/icon.css'
import './styles/card.css'
import './styles/dialogBox.css'
import './styles/input.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
