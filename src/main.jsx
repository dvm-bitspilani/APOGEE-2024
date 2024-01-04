import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

import { BrowserRouter as Router } from "react-router-dom";
import AnimationWrapper from './AnimationWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AnimationWrapper />
    </Router>
  </React.StrictMode>,
)
