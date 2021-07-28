import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './App'

const GlobalCss = withStyles({
  '@global': {
    '*': {
      'scrollbar-width': 'none',
    },
    '*::-webkit-scrollbar': {
      display: 'none',
    },
    '.MuiBackdrop-root': {
      backgroundColor: '#36474f',
    },
    '.MuiPaper-root': {
      backgroundColor: '#263238',
    },
  },
})(() => null)

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <GlobalCss />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
