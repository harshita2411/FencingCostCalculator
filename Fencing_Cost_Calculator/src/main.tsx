// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { FencingCostCalculator } from './FencingCostCalculator.tsx'
// import App from './App.tsx'
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css'; // Import global styles

// Create a root for the React app and render it
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
